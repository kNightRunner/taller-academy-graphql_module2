import { Injectable } from '@nestjs/common';
import { GraphQLError } from 'graphql';
import { Task, TaskStatus, TransitionTaskInput } from './task.model';

const allowedTransitions: Record<TaskStatus, ReadonlySet<TaskStatus>> = {
  [TaskStatus.TODO]: new Set([TaskStatus.IN_PROGRESS]),
  [TaskStatus.IN_PROGRESS]: new Set([TaskStatus.TODO, TaskStatus.DONE]),
  [TaskStatus.DONE]: new Set(),
};

@Injectable()
export class TaskService {
  // Demonstration only: this store is process-local and resets on restart.
  private readonly tasks = new Map<string, Task>([
    ['task-42', { id: 'task-42', title: 'Review GraphQL mutation behavior', status: TaskStatus.TODO, version: 1, updatedAt: new Date('2026-01-01T00:00:00.000Z') }],
  ]);

  findOne(id: string): Task | null {
    const task = this.tasks.get(id);
    return task ? { ...task } : null;
  }

  transition(input: TransitionTaskInput): Task {
    const task = this.tasks.get(input.taskId);
    if (!task) {
      throw new GraphQLError('Task not found', { extensions: { code: 'TASK_NOT_FOUND' } });
    }
    if (!Number.isInteger(input.expectedVersion) || input.expectedVersion < 1) {
      throw new GraphQLError('Expected version must be a positive integer', { extensions: { code: 'INVALID_VERSION' } });
    }
    if (task.version !== input.expectedVersion) {
      throw new GraphQLError('Task has changed. Reload and retry with the current version.', {
        extensions: { code: 'VERSION_CONFLICT', currentVersion: task.version },
      });
    }
    if (!allowedTransitions[task.status].has(input.newStatus)) {
      throw new GraphQLError(`Cannot transition from ${task.status} to ${input.newStatus}`, {
        extensions: { code: 'INVALID_TRANSITION' },
      });
    }

    // Synchronous check + update is indivisible in one Node.js process.
    // Multi-instance deployments require a database atomic conditional update.
    const updated: Task = {
      ...task,
      status: input.newStatus,
      version: task.version + 1,
      updatedAt: new Date(),
    };
    this.tasks.set(task.id, updated);
    return { ...updated };
  }
}