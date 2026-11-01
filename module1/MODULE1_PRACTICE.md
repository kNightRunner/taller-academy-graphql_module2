# Taller Academy — Module 1 Practice: Name the Value You Are Part Of

> Personal reflection based on backend integration work. This document intentionally avoids client names, internal systems, implementation details, and confidential metrics. Where business knowledge is unavailable, it is stated as an open question rather than invented.

## Exercise 1 — The two-sentence test

My project helps different parts of a digital product exchange the information they need so customer-facing features can work reliably. When a dependency is unavailable or returns unexpected information, those features can fail or be delayed, and other teams need clear information to restore normal operation.

**Read-aloud check:** This description uses no internal service names or unexplained acronyms and focuses on the business purpose and consequences of the work.

## Exercise 2 — The stop test

**If the project froze for one month, who would notice first, and what would they notice?**

The engineering teams integrating with or depending on our work would likely notice first. They could encounter blocked changes, unresolved integration defects, or delays in delivering features that rely on these data exchanges. If those problems reached users, support or product teams might then see an increase in reported issues. The exact sequence depends on which integrations were affected.

**Which business number does the work touch?**

One relevant measure is the **success rate of customer-facing operations that depend on these integrations**. Reliability problems can also affect support volume and time spent investigating failures. I do not currently know the exact business metric or its baseline; I would ask my technical lead or product manager which measure is tracked and how our integration contributes to it.

## Exercise 3 — One action

**What could my client manager accurately say about my contribution tomorrow (two sentences)?**

I work on assigned backend integration tasks and validate the expected behavior of the changes I deliver. I have also identified failures in dependent services, documented affected requests, and communicated the impact through the team's written channels so the responsible people could investigate.

**One action for this week:**

By **November 3, 2026**, I will ask my technical lead or product manager which service reliability or customer-impact metric best reflects our integration work, and where I can find the current baseline. I will use that answer to make future progress updates clearer and more outcome-focused.

## Self-check

- [x] I can describe the project's purpose in two plain-language sentences.
- [x] I can name a business-relevant measure: the success rate of operations depending on our integrations.
- [ ] I know the actual tracked metric and its baseline; I will verify them with my lead or product manager.
- [ ] I know how many client-side people could accurately describe my contribution; I should confirm this rather than guess.

**Visibility note:** I have shared technical blockers through Slack and Jira. I have not assumed how many client-side stakeholders saw or understood those updates.

## Confidentiality

No client identity, customer information, internal endpoints, financial figures, secrets, or proprietary source code are included.
