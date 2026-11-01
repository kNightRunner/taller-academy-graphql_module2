import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Task, TransitionTaskInput } from './task.model';
import { TaskService } from './task.service';

@Resolver(() => Task)
export class TaskResolver {
  constructor(private readonly tasks: TaskService) {}

  @Query(() => Task, { nullable: true })
  task(@Args('id', { type: () => String }) id: string): Task | null {
    return this.tasks.findOne(id);
  }

  @Mutation(() => Task)
  transitionTask(@Args('input') input: TransitionTaskInput): Task {
    return this.tasks.transition(input);
  }
}