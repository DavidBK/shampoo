# Testing in Javascript

-- _Estimation time: 1-2 Days_

---

When we write software systems, it is often hard to tell if the system is fully working. There are often bugs - either cases where system doesn't behave is planned. This can cause either exceptions - and then the system crashes, or simply faults where we get unwanted behavior which leads to all sorts of complications and expenses.

There are several ways to find these bugs:

1. Run the system and when it crashes or we find a bug in production, we fix it
1. Test the system before deploying it, and trying to catch as many bugs during these tests.

Needless to say, we usually prefer the second option, as it is usually the cheaper one - it keeps the customer satisfied, and reduces the probability of runaway expenses.

Also, testing make the future development of the system easier, as we can change the system and be more confident that we didn't break anything.

Therefore in most cases, you'll find some form of tests - be they minimal or elaborate, in order to catch at least some of the more obvious, and more fatal faults.

**_Learning objectives:_**

At the end of this learning path, you'll be able to:

- Write unit-tests in JS
- Understand concepts of testing
- Differentiate between unit, integration and end-to-end tests

---

_Send me back [home](home)_

[[*TOC*]]

---

**Learning note**: all links in this path are reading tutorials. You can read them but you can watch a youtube crash course. if you find useful links, please share them with me.

Here is some examples links:

- [A bit of a high level talk](https://www.youtube.com/watch?v=6nSwRSbc27g)

## Unit, Integration and End-to-end tests

Learn about the division of tests into these three levels.

A good place to start reading is [Michelle Tran's blog](https://www.twilio.com/blog/unit-integration-end-to-end-testing-difference) You can also check out her links.

### Questions

- What level of test should be the fastest?
- If we want to make sure two systems interact properly, what type of test are we creating?
- For each of the three levels of testing, who is responsible for writing these tests, and with whom should he talk about them?
- Assuming we made pretty good integration tests, why would we want end-to-end tests as well?
- Imagine you are in a startup, which is developing systems quickly, but breaking them constantly. This means that you can't be sure how the systems will interact in future, but the goal of the whole system is to supply some form of service. Which tests would you write and which would you not?

## Unit tests in JS

There are several frameworks for unit tests in JS. The most popular one is [jest](https://jestjs.io/). You can also check out [mocha](https://mochajs.org/) and [Vitest](https://vitest.dev/) or [Node Test Runner](https://nodejs.org/api/test.html).

You can choose to learn any of these frameworks, ask your mentor what is preferred in your team.
The important thing is to understand the concepts of unit tests.

### Jest

Learn the [jest](https://jestjs.io/) framework for unit-tests in JS

### Things you should know:

- Expect
- Describe
- It
- Test
- Before and After
- Coverage

### Questions TODO

- _write a function and test it_
- _some questions about how to use beforeEach, afters and such_
- _Writing tests that can run in parallel_

## Mocking

Sometimes we don't want to actually run something, or to interact with the real system. But we do want to assume an interaction with it. Therefore we need to create a **mock** of the function, in order to test other parts of our system.

### Things you should know:

- Stubs
- Mocks
- Spy

### Questions

1. When should we and when shouldn't we use mocking?
1. What are the dangers of mocks in each of the three levels of tests, and what are the advantages?
1. _code example for spy and stub - ask what to use in different instances_
1. ADVANCED: How are mocks implemented in JS? How do we restore the original function after we mocked it?

## Automatic testing

[auto-testing vs. manual testing](https://www.testim.io/blog/test-automation-vs-manual-testing/) is a concise summary of the differences with pros and cons.

### Questions

1. When should we write automatic tests for end to end tests?
1. Assuming a backend service (no UX), how would you decide what to test manually and what to test with automation? The division needn't be according to levels, but more about the systems and their behavior. What aspects of a system would help you decide whether to test them manually or not?
