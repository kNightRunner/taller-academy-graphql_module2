# Module 2 Practice — Rewrite Two Things

> **Submission status: incomplete.** Work item 1 is based on my reported experience. Work item 2 is illustrative, not a verified completed task. The lab requires two real finished pieces of work from the last 60–90 days. No proprietary details are included.

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

### Work item 2 — Query optimization (illustrative candidate, not a verified work experience)

**Illustrative original ticket title:** Optimize task list query

| Question | Example answer requiring verification |
| --- | --- |
| What was true before? | A list query could fetch related data separately for each item, resulting in unnecessary requests. |
| What did you do? | Proposed batching related lookups and requesting only relevant fields. |
| What is true now? | Not established: implementation and before/after measurements have not been verified. |
| What did that let someone else do? | Potentially load the same information with fewer data-source calls if implemented and measured. |

**Example standup (one sentence; not a verified claim):** Proposed batching repeated related-data lookups to reduce unnecessary requests in a GraphQL query.

**Example stakeholder (two sentences; not a verified claim):** Loading a list of items could trigger repeated requests for related information. Combining those requests could make the process more efficient, but the improvement still needs to be implemented and measured.

### Compare original titles with outcome-focused versions

| Ticket title | Outcome-focused description |
| --- | --- |
| Internal GraphQL integration ticket (title not shared) | Made an external service failure actionable by documenting affected calls and communicating the blocker to the responsible team. |
| Optimize task list query (illustrative) | Potentially reduce redundant requests for related data; outcome not yet validated. |

**Reflection:** The outcome-focused descriptions clarify who benefits and what changed. The first example is grounded in reported work; the second remains a proposal and cannot be submitted as a finished work item without further evidence.

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

- [ ] Both stories are real work completed in the last 60–90 days.
- [ ] One is an accomplishment that was not widely noticed.
- [ ] Before, action, after, and benefit are supported by evidence.
- [ ] Both stories contain a one-sentence standup version and two plain-language stakeholder sentences.
- [x] My ownership rung, higher-rung example, and blocker reflect my reported experience.
- [x] One actual technical blocker was reported through Slack and Jira.
- [ ] No employer or client-confidential information is exposed.

**Before submitting:** Confirm that the reported work falls within the last 60–90 days and replace the illustrative second item with another verified, completed contribution. Do not claim unmeasured query optimizations as achieved outcomes.
