# Taller Academy — Module 2: From Output to Outcomes

Independent GraphQL learning project built with NestJS and TypeScript. This repository uses fictional data only. No employer code, customer information, private endpoints, or credentials are included.

> **Assignment status: draft.** Module 2 asks for two genuine, completed pieces of work from the previous 60–90 days. This technical demonstration does not substitute for those personal examples. See [MODULE2_PRACTICE.md](./MODULE2_PRACTICE.md).

## Problem and intended outcomes

Without version checks, competing updates can silently overwrite each other. Without workflow rules, a task can jump into a state that is not valid for the process.

This example implements:
- **Optimistic concurrency:** `transitionTask` accepts `expectedVersion`. Reusing a stale version returns `VERSION_CONFLICT`.
- **Workflow validation:** allowed transitions are `TODO → IN_PROGRESS`, `IN_PROGRESS → TODO`, and `IN_PROGRESS → DONE`. Other transitions return `INVALID_TRANSITION`.
- **Structured errors:** missing tasks and invalid versions have distinct GraphQL error codes.

## Stack

Node.js 20+ (22 recommended), NestJS 11, TypeScript, Apollo GraphQL Code First, Jest. Storage is in-memory for demonstration.

## Get started

```bash
npm install
npm run typecheck
npm test
npm run build
npm run start:dev
```

Send GraphQL requests to `http://localhost:3000/graphql` using an HTTP client. An interactive playground is not enabled.

### Query the seed task

```graphql
query {
  task(id: "task-42") {
    id
    title
    status
    version
    updatedAt
  }
}
```

### Apply a valid mutation

```graphql
mutation {
  transitionTask(input: {
    taskId: "task-42"
    expectedVersion: 1
    newStatus: IN_PROGRESS
  }) {
    id
    status
    version
  }
}
```

After success, the task has version 2. Repeating the same request with version 1 returns `VERSION_CONFLICT`.

To observe an invalid transition, restart the server (resetting the in-memory store) and attempt `TODO → DONE`.

## Scope and limitations

- The store is local to one process and resets on restart. A distributed system needs an atomic conditional database update and an affected-row check.
- There is no authentication, authorization, durable persistence, or production monitoring.
- Service-level tests are provided, but successful execution must be verified in a configured runtime; no fabricated test results or business metrics are claimed.

## Module 2 practice

The educational API provides examples of technical changes and possible outcomes. The separate [practice document](./MODULE2_PRACTICE.md) must be completed with verified personal experience before submission.
