import { TaskStatus } from './task.model';
import { TaskService } from './task.service';

const transition = (service: TaskService, newStatus: TaskStatus, expectedVersion: number) =>
  service.transition({ taskId: 'task-42', newStatus, expectedVersion });

describe('TaskService.transition', () => {
  let service: TaskService;

  beforeEach(() => {
    service = new TaskService();
  });

  it('updates a valid transition and increments the version', () => {
    const updated = transition(service, TaskStatus.IN_PROGRESS, 1);
    expect(updated.status).toBe(TaskStatus.IN_PROGRESS);
    expect(updated.version).toBe(2);
  });

  it('rejects a stale writer without overwriting the first update', () => {
    transition(service, TaskStatus.IN_PROGRESS, 1);
    expect(() => transition(service, TaskStatus.IN_PROGRESS, 1)).toThrow('Task has changed');
    expect(service.findOne('task-42')?.version).toBe(2);
    expect(service.findOne('task-42')?.status).toBe(TaskStatus.IN_PROGRESS);
  });

  it('rejects an invalid status transition without changing the task', () => {
    expect(() => transition(service, TaskStatus.DONE, 1)).toThrow('Cannot transition');
    expect(service.findOne('task-42')?.version).toBe(1);
  });

  it('rejects an invalid version', () => {
    expect(() => transition(service, TaskStatus.IN_PROGRESS, 0)).toThrow('positive integer');
  });

  it('rejects a missing task', () => {
    expect(() => service.transition({ taskId: 'missing', expectedVersion: 1, newStatus: TaskStatus.IN_PROGRESS })).toThrow('Task not found');
  });

  it('does not expose mutable internal state to callers', () => {
    const task = service.findOne('task-42')!;
    task.status = TaskStatus.DONE;
    expect(service.findOne('task-42')?.status).toBe(TaskStatus.TODO);
  });
});