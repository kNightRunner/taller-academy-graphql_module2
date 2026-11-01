# Module 2 Practice — Rewrite Two Things

> **Submission note:** Both work items describe reported professional experiences. The author confirmed that both examples took place within the last 90 days. No proprietary details are included.

## Exercise 1 — Rewrite two things

### Work item 1 — GraphQL integration dependency investigation (confirmed experience)

**Original ticket title:** Not disclosed (internal Jira ticket).

| Question | Answer |
| --- | --- |
| What was true before? | A service required by my GraphQL integration was returning errors, blocking or disrupting integration work. |
| What did you do? | I identified the failing service calls, documented the failures, and communicated their impact through Slack and Jira. |
| What is true now? | The issue and the affected requests were documented and visible to the responsible team; I have not claimed the underlying service was fixed. |
| What did that let someone else do? | The responsible team had specific failure details to investigate and coordinate next steps. |

**Standup (one sentence):** Identified and documented failing service calls affecting my GraphQL integration, giving the responsible team actionable information through Slack and Jira.

**Stakeholder (two sentences, no jargon):** An external service was failing and disrupting an integration I was working on. I documented which requests were failing and shared their impact with the responsible team so they could investigate the issue.

### Work item 2 — GraphQL query optimization (reported completed work)

**Original ticket title:** Not disclosed (internal ticket).

| Question | Answer |
| --- | --- |
| What was true before? | A GraphQL query repeatedly called the backend to retrieve the same information, creating redundant requests. |
| What did you do? | I identified the duplicate calls and updated the resolver to reuse retrieved data within each query execution. |
| What is true now? | The query returned the expected data with fewer backend calls. I validated its behavior using Apollo and in the QA environment. |
| What did that let someone else do? | The backend avoided unnecessary work, and the query execution path became simpler without changing the expected response. |

**Standup (one sentence):** Updated a GraphQL resolver to reuse data within each execution, eliminating redundant backend calls while preserving the expected response, as validated in Apollo and QA.

**Stakeholder (two sentences, no jargon):** Retrieving information was causing repeated requests for data the system had already fetched. The improvement reduced unnecessary requests while returning the same expected information, which I verified in the test environment.

**Evidence:** Verified functionally in Apollo and QA, as reported. The number of calls saved and any response-time improvement were not measured or provided, so no numerical performance gain is claimed.

### Compare original titles with outcome-focused versions

| Ticket title | Outcome-focused description |
| --- | --- |
| Internal GraphQL integration ticket (title not shared) | Made an external service failure actionable by documenting affected calls and communicating the blocker to the responsible team. |
| Internal GraphQL query optimization ticket (title not shared) | Reduced redundant backend calls by reusing query data while preserving the expected response. |

**Reflection:** The outcome-focused descriptions explain why the work mattered beyond the ticket implementation. The first improved visibility and coordination around a blocking dependency; the second reduced unnecessary backend activity without changing the response consumed by the client.

## Exercise 2 — Locate myself

**My typical ownership level: Level 2 — I own assigned tasks or features from assignment through completion.**

As a backend engineer, I usually take responsibility for implementing assigned changes, investigating issues, and checking that the intended behavior is achieved. I recognize that understanding dependencies and raising risks early are also important parts of delivering reliable work.

**Example of operating one rung higher (Level 3) within the last 90 days — two lines:**

While working on a GraphQL integration, I identified that the backend was not fully prepared to support the expected integration behavior and raised the issue rather than treating it as an isolated coding task.

I also noticed that errors associated with a third-party deployment were affecting my work, and I communicated that external dependency and its impact to the team so it could be addressed.

**What prevents me from operating at Level 3 more consistently?**

I am usually involved once tasks and their technical direction have already been defined. That can limit my opportunity to identify integration dependencies, discuss risks, and help shape acceptance criteria before implementation starts. I would also benefit from earlier visibility into business requirements and upstream deployment plans.

**My next step:**

For upcoming integration work, I will ask about upstream readiness and deployment dependencies before starting, document potential blockers early, and propose clearer acceptance criteria when requirements or responsibilities are ambiguous.

## Exercise 3 — Make one result visible

**Outcome statement communicated:**

During a GraphQL integration, I identified backend readiness issues and deployment problems involving an external dependency that were affecting my assigned work. I raised these blockers with the team so the integration risks were visible and the next steps could be coordinated.

**Where it was shared:**

I communicated these integration blockers in Slack and Jira so the relevant team members could see the dependency and coordinate next steps. Internal links and confidential details are intentionally omitted.

**Two-week habit:**

Before describing completed work in a standup, I will ask “So what?” and explain how my contribution changed the situation for the team.

## Submission readiness

- [x] Both stories are reported real work completed within the last 90 days (confirmed by the author).
- [ ] One is an accomplishment that was not widely noticed.
- [x] Before, action, after, and benefit are described without inventing metrics or fixes.
- [x] Both stories contain a one-sentence standup version and two plain-language stakeholder sentences.
- [x] My ownership rung, higher-rung example, and blocker reflect my reported experience.
- [x] One actual technical blocker was reported through Slack and Jira.
- [x] No employer or client-confidential information is exposed.

**Final review:** Identify which example was the less-visible accomplishment. The first example documents a blocker and escalation, not a claim that the external service was fixed.
