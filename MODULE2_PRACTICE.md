# Module 2 Practice — Rewrite Two Things

> **Illustrative draft — not yet ready for grading.** The GraphQL examples below are hypothetical. They must be replaced or confirmed with real work that I substantively completed in the last 60–90 days. No client names, proprietary details, or internal systems are disclosed.

## Exercise 1 — Two candidate outcome stories

### Candidate 1 — GraphQL mutation: prevent conflicting task updates

**Illustrative original ticket title:** Add task status mutation

| Question | Example answer (verify before claiming as personal work) |
| --- | --- |
| What was true before? | Two overlapping updates could silently overwrite a task's latest state. |
| What did you do? | Added an expected-version check and validation of allowed status transitions to a GraphQL mutation. |
| What is true now? | Stale updates are rejected with an explicit conflict instead of silently overwriting a task. |
| What did that let someone else do? | API consumers can refresh a changed task and decide whether to retry, rather than unknowingly losing another update. |

**Standup (one sentence):** Added version checks to task mutations so concurrent edits result in a clear conflict rather than silently overwriting an update.

**Stakeholder (two sentences, no jargon):** Changes made by one person could accidentally replace more recent changes made by someone else. The new safeguard detects conflicting edits, helping people avoid losing work.

**Evidence to collect:** Passing concurrency and transition tests, a before/after demonstration, and confirmation that this work was completed within the required period.

### Candidate 2 — GraphQL query: reduce redundant data fetching

**Illustrative original ticket title:** Optimize task list query

| Question | Example answer (verify before claiming as personal work) |
| --- | --- |
| What was true before? | A task list query could fetch related user details separately for each task, adding unnecessary data-source calls. |
| What did you do? | Batched related lookups for the query and requested only the fields clients needed. |
| What is true now? | Repeated related lookups could be combined into a smaller number of requests; the improvement must be verified with measurements. |
| What did that let someone else do? | Client developers could load the same task information with fewer backend lookups, potentially improving response times. |

**Standup (one sentence):** Redesigned related-data fetching in a task query to reduce redundant backend lookups while preserving the information clients need.

**Stakeholder (two sentences, no jargon):** Loading a list of tasks previously required repeated requests for related information. Grouping those requests makes the process more efficient and creates an opportunity to improve loading times.

**Evidence to collect:** Query instrumentation before and after, matching response data, integration tests, and confirmation that the work was actually completed.

### Compare the illustrative titles and outcome descriptions

| Output-oriented title | Outcome-oriented statement |
| --- | --- |
| Add task status mutation | Prevent conflicting edits from silently overwriting task updates. |
| Optimize task list query | Reduce redundant backend lookups when retrieving task lists. |

The outcome descriptions explain the underlying reliability and efficiency benefits instead of merely naming the implementation.

**Note:** Candidate 1 resembles the educational code in this repository. Candidate 2 is only a design proposal and **has not been implemented or measured in this repository**. Neither example proves previous professional work.

## Exercise 2 — Personal ownership assessment (complete honestly)

The five rungs are: (1) execute assigned tasks; (2) own assigned tasks through completion; (3) help define and break down work; (4) own larger workstreams end to end; and (5) help set team priorities.

**My typical rung:** _[Choose the level that reflects a typical week, not the best week.]_

**Example of working one rung higher within the last 90 days (two lines):**

_[Describe an actual instance where I clarified an ambiguous requirement, proposed an approach, or expanded the scope responsibly.]_

_[Explain how that decision helped the team or changed the result.]_

**Specific blocker:** _[Choose a real constraint, such as missing business context, limited autonomy, capacity, or different career priorities.]_

**Next step:** _[One actionable improvement appropriate to that blocker.]_

## Exercise 3 — Make one result visible

**Outcome statement shared:** _[Insert one real, verified statement from Exercise 1.]_

**Where and when I shared it:** _[State the ticket comment or written update after actually sharing it; omit sensitive URLs.]_

**Two-week habit:** Before describing completed work in a standup, ask “So what?” and communicate the change it produced.

## Submission readiness

- [ ] Both stories are real work completed in the last 60–90 days.
- [ ] One is an accomplishment that was not widely noticed.
- [ ] Before, action, after, and benefit are supported by evidence.
- [ ] Both stories contain a one-sentence standup version and two plain-language stakeholder sentences.
- [ ] My ownership rung, higher-rung example, and blocker are truthful.
- [ ] One actual outcome update was shared with the team.
- [ ] No employer or client-confidential information is exposed.

**Do not submit this illustrative draft as a completed personal reflection.**
