import { Field, ID, InputType, Int, ObjectType, registerEnumType } from '@nestjs/graphql';

export enum TaskStatus {
  TODO = 'TODO',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
}
registerEnumType(TaskStatus, { name: 'TaskStatus' });

@ObjectType()
export class Task {
  @Field(() => ID)
  id!: string;

  @Field()
  title!: string;

  @Field(() => TaskStatus)
  status!: TaskStatus;

  @Field(() => Int)
  version!: number;

  @Field()
  updatedAt!: Date;
}

@InputType()
export class TransitionTaskInput {
  @Field(() => ID)
  taskId!: string;

  @Field(() => Int)
  expectedVersion!: number;

  @Field(() => TaskStatus)
  newStatus!: TaskStatus;
}