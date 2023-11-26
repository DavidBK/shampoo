# Testing in Javascript

_Author: [@gthecht](https://github.com/gthecht)_

> _Estimation time: 1-2 Days_

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

[[_TOC_]]

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

### Things you should know

- Expect
- Describe
- It
- Test
- Before and After
- Coverage

## Mocking

Sometimes we don't want to actually run something, or to interact with the real system. But we do want to assume an interaction with it. Therefore we need to create a **mock** of the function, in order to test other parts of our system.

### Things you should know

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

## Task

Let's create a banking system. The bank has users - that can be added and closed. When adding a user we put an initial amount of money in the balance. We can also deposit more money or withdraw some.

Furthermore, we can create transactions between users, where we subtract an amount from one user, and add the same amount to the other.

All changes to the balance are written into the transaction array for each user.

Your task is to unit-test that everything works, and fix the bugs if there are any.

```js
const bank = {};

const addUser = (user, balance) => {
  bank[user] = {
    balance,
    transactions: [],
  };
};

const removeUser = (user) => {
  const balance = bank[user].balance;
  delete bank[user];
  return balance;
};

const getUser = (user) => {
  return bank[user];
};

const deposit = (user, amount) => {
  bank[user].balance += amount;
  return bank[user].balance;
};

const withdraw = (user, amount) => deposit(user, -amount);

const transaction = (fromUser, toUser, amount) => {
  const transactionDoc = { from: fromUser, to: toUser, amount };
  bank[fromUser].transaction.push(transactionDoc);
  bank[toUser].transaction.push(transactionDoc);
  bank[fromUser].balance -= amount;
  bank[toUser].balance += amount;
};
```

### Behaviors

First thing to do is think a bit about what sort of behavior we want (you can reread the short description above), and understand what the system is **supposed** to do.

Now, think of a list of tests you _could_ write that would check whether the system is indeed working as intended.

Think also of some validations that should be done to prevent unwanted behavior:

e.g. We don't want to allow a negative balance to any user

**_Note:_**

- There can be some tests to each behavior - in that case you can group them within a describe
- You don't have to think of **all** the tests before writing, its just easier for me to group the steps in such a manner
- You can also write the tests as empty function - that pass, and fill them out one by one

### Tests

Write the tests, think of what you need to setup before each test (or all tests together).
Think of how you cleanup (teardown) those things that could potentially change the output of other tests, and of course that you won't need any more.

**_Note:_**

- When should you use before/after and when beforeEach/afterEach?
- Can you run your tests in parallel or not? Turn your tests into ones you can run in parallel if not

### Fix the code

I hope you have some tests that fail, and not because the tests are faulty. Now its time to fix the code in such a manner that will make your tests pass.

**_Note:_**

- Don't add arguments that the user needs to supply - that changes the API and isn't needed
- Try to keep the changes as simple as possible and the outcome as well

### Using MongoDB

Now we want to change the code so the bank data is held in a mongo DB.

Take the fixed code, and ask your favorite AI-code-bot to swap the bank object for a mongoDB collection.

Copy back the files it generates. We're going to make sure this code works...

So now change the tests you have previously written (I recommend you do this yourself) so they accommodate the changes.

Afterwards, check whether they succeed or fail. If they fail, make sure the tests are correct and then check if there is an issue in the source-code.

**_Note:_**

- Can you run your tests in parallel or not? Turn your tests into ones you can run in parallel if not
- How much time does it take to run the tests now? If its longer than before, by how much?

### Mocking

In order to make the tests run faster, you can change the connection to mongo to a mock.

There are several ways to do so, and jest has a library that specifically mocks mongoDB. But for now I want you to use the more basic mock libraries.

**_Note:_**

- Where do you want to use a stub, and where a spy?
- Make sure you restore the mocks when you cleanup
- How long do the tests take now compared to the previous iterations? (If you don't remember, using git will allow you to rerun the previous versions)

### As a server

Now require the AI-chatbot to host the bank system on a server (decide what framework you want to use). Copy the relevant code.

This final version should be a server with routes corresponding to the functions in the initial JS file (user management, withdrawal, deposit and transactions), and that holds the bank data in a mongo connection.

Do you need to write tests for the server? If so, what should they test (assuming that the underlying logic works).

Decide whether you want to create unit tests, or test it manually. Run your thoughts by your instructor. And of course go over the code, I wouldn't trust these AI noobs...

### Integration tests

Now we'll write a module that helps the user keep track of his transactions. Write such a module - it should return the transactions, and group them according to the person to whom the money was sent.

Test how this module integrates with the bank system. These are the basics of integration tests.

**_Tests to think about:_**

- Test for success (always)
- Test failure (user doesn't exist, server is down or not connected, password is wrong, etc.)
- Stress tests: How does it behave if there are many requests to the server from many users, or from a user many times?
- Test behavior while the balance is changing - how quickly a change is there when we create a transaction?

### Adding a feature

So if we pause a moment, we'll notice that we have several layers of tests:

- Unit tests for the logic
- Tests that relate to the mongoDB (whether mocked or not)
- Possibly tests that check the server routes
- Integration tests for the transactionTracker's connection to the bank system
- Possibly unit-tests for the transactionTracker

But there's something missing... We want to group the transactions according to category. For instance was the transaction a purchase of food, clothes, transportation? Did we receive money as a gift, salary, loan or refund?

How would you add a category to all transactions, withdrawals and deposits?

Look at your tests, and think what you'd need to change.

Now here you have two options:

1. Add the category to all transactions in your code, and the module accordingly, then fix the tests so they pass
2. Change the tests so they require a transaction category to pass (mind not all tests need those), and then fix the source-code so it passes the tests

Personally I recommend trying out the second option, but you can decide together with your instructor what he recommends.

---

**Explanation:**

So why would I want you to change the tests before the code itself?

There are two reasons, and the relevant one for you depends whether your are a tester, or a developer.

#### I'm a dev

If so, there is a development paradigm called TDD (test driven development). The idea is that you write unit-tests before you write code. There are all sorts of reasons why some think this is a reasonable idea, and I'll allow you to look for them online.

If so, you'll ask, then why did I not demand from the first task?

Well, two reasons (always two for some reason...s), one is that TDD is hard to implement, especially as a junior dev. I think its worth a try, but I would mostly recommend it to developers with a couple of years under their belt. The other reason being that I wanted to allow you to use automatically generated code and then test it, rather than you feeding the tests into the AI and asking for code.

#### I'm a QA and auto-tester

If so, than one of the important aspect of being a tester, is to take part in the development process right from the start - the design phases. This allows you to understand how a solution could be tested, and to help guide the solution design to a place that can more easily be validated, and thus - as is your job - reduce the amount of bugs, and create greater confidence in the product.

Until now I wanted to allow you to truly test code, and understand what needs fixing using an automatically generated code, since that increases the chances of you finding bugs due to undefined behavior and not just buggy code.

But now that everything should more or less be running, its time for you to think more maturely, and decide how, using existing tests, you would test a new feature.

---

### Task summary

So, we created a banking system, and looked at how the unit-tests would change according to what lies underneath. In addition, we allowed another to generate code as per our requests, and tested its behavior to make sure there are no bugs, and no loosely defined behavior.

Following that, we created a simply module, and tested the integration between the module and server. This allowed us to see the difference in the design and responsibilities of unit tests versus integration tests.

Lastly, we added a new feature to the design, and learned how the tests on multiple levels needed to change to accommodate the new feature.

Hope you enjoyed playing around with tests...
