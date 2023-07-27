# Asynchronous NodeJS and JavaScript

-- _Estimation time: 2-4 Days_

---

This learning path will teach you how to write asynchronous code in JavaScript and Node.js.

**_Learning objectives:_**

At the end of this learning path, you'll be able to:

- Write an efficient asynchronous code
- Use the `async` and `await` keywords
- Write scalable and performant code

---

_Send me back [home](home)_

[[_TOC_]]

---

**Learning note**: all links in this path are reading tutorials. You can read them but you can watch a youtube crash course. if you find useful links, please share them with me.

Here is some examples links:

## Asynchronous in JavaScript

Asynchronous programming is a technique that enables your program to start a potentially long-running task and still be able to be responsive to other events while that task runs, rather than having to wait until that task has finished. Once that task has finished, your program is presented with the result.

Many functions provided by nodeJS and browsers can potentially take a long time and therefore, are asynchronous.

**_After each mini chapter in this path, create a "Pull Request" and/or talk to your mentor to validate your knowledge._**

### Introduction

We will learn a several techniques to make our programs asynchronous.
Some of these techniques are legacy and not recommended for new projects but they are still important to understand.

1. Read the following script:

   ```js
   // This function use setTimeout to simulate a long running task
   function logAfterMs(message, ms) {
     setTimeout(() => console.log(message), ms);
   }

   logAfterMs("1", 0);
   logAfterMs("2", 1);
   logAfterMs("3", 10);
   logAfterMs("4", 5);
   console.log("5");
   ```

   What do you think will be the output?

2. Create a `intro.js` file and run it in the terminal.

   ```bash
   node intro.js
   ```

   What is the output? why?

### Callbacks

A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

Here is a example to synchronous use of callback function:

```js
function greeting(name) {
  console.log(`Hello, ${name}`);
}

function addUser(callback) {
  const userName = "David";
  callback(userName);
}

addUser(greeting);
```

Or in anonyms arrow function style:

```js
function addUser(callback) {
  const userName = "David";
  callback(userName);
}

addUser((name) => {
  console.log(`Hello, ${name}`);
});
```

However, callbacks are often used to continue code execution after an **asynchronous** operation has completed - these are called asynchronous callbacks.

Its is often to named callbacks function `done` - Because we are calling them when the operation done:

```js
function saveUser(user, done) {
  // do something
  done();
}
```

#### Execution order

Lets fix the above `intro.js` script by adding a callback function.

Create a `callbacks-logging.js`.

Change the `logAfterMs` function to accept a callback function as a the last argument:

```js
function logAfterMs(message, ms, done) {
  setTimeout(() => {
    console.log(message);
    done();
  }, ms);
}
```

1. Write a code that log the string `"1"` after 0 ms.
2. Write a code that log the string `"2"` 1 ms after the log `"1"` above has finished.
3. Write a code that log the string `"3"` 10 ms after the the log `"2"` above has finished.
4. Write a code that log the string `"4"` 5 ms after the the log `"3"` above has finished.
5. Write a code that log the string `"5"` after all the logs.

Commit and push your changes.

#### Error Handling

In Node.js, it is considered standard practice to handle errors in asynchronous functions by returning them as the **first argument** to the current function's callback. If there is an error, the first parameter is passed an Error object with all the details. Otherwise, the first parameter is null.

Here is an example with synchronous code:

```js
const exampleValue = null; // change to test the function

function validateTruthy(value, done) {
  if (value) return done();
  const error = new Error(`Value ${value} is not Truthy!`);
  done(error);
}

validateTruthy(exampleValue, (err) => {
  if (err) console.error(err);
  else console.log("Great success!");
});
```

We want to be able to handle errors in our logging code workflow.

Here is a function that simulate a logging that may fail:

```js
function maybeLog(message, ms, done) {
  setTimeout(() => {
    const isError = Math.random() < 0.5;
    if (isError) return done(new Error("Something went wrong"));
    console.log(message);
    done();
  }, ms);
}
```

Lets say the `"3"` logging may fail.

1. Replace step 3 (logging `"3"`) with this function.
2. Handle the error:
   - If the error is thrown, log the error and stop the execution.
   - If the error is not thrown, log the string `"4"` as usual and continue to step 5.

Commit and push your changes.

#### Pass data

We want our code to pass results from async operations to other.

Lets say the `"3"` logging need to pass a result to the `"4"` logging.

1. Replace the `maybeLog` function with this function:

```js
function maybeLog(message, ms, done) {
  setTimeout(() => {
    const random = Math.random();
    const isError = random < 0.3;
    if (isError) return done(new Error("Something went wrong"));
    console.log(message);
    done(null, random);
  }, ms);
}
```

1. Handle the results in step 4:

   - If the results is bigger then `0.9` log `"4: good result"`
   - If the results is smaller then `0.8` log `"4: bad result"`

1. Print the `"5"` logging after `random` (from step 3) **seconds**.

Commit and push your changes.

#### Concurrent execution

We want to be able to run multiple async operations in parallel.
Lets say that after the `"4"` logging we want to print the `"5"` logging and in concurrent run functions that logs the string `"hi 5"` after 5 ms and `"take 5"` after 6 ms.

1. Create a function that after `5` ms logs the string `"Hi five"`
1. Create a function that after `6` ms logs the string `"Take five"`
1. Execute the `"5"`, `"Hi 5"`, ``"Take 5"` functions logging after the `"4"` logging in concurrent.

Commit and push your changes.

#### After Concurrent execution - (Optional)

We want to be able to run async operations after parallel execution is done.
Lets say that after the step 5 (logging `"5"`, `"Hi five"`, `"Take five"`) we want to log `"6"` after 10 ms;

How do you implement a job after "Parallel" execution?

#### Callbacks - Questions

1. What is the advantage and the disadvantage of using callbacks as a solution for the async problem?
1. When do you think this solution will be useful?
1. What is callback hell?

#### Callbacks - Worth Knowing (Optional)

These topics are not covered in this chapter but is worth knowing:

- [Async.js](https://caolan.github.io/async/v3/)

### Promises

A `Promise` is an object representing the eventual completion or failure of an asynchronous operation.

Once a promise has been called, it will start in a pending state. This means that the calling function continues executing, while the promise is pending until it resolves, giving the calling function whatever data was being requested.

The created promise will eventually end in a resolved state, or in a rejected state, calling the respective callback functions (passed to `then` and `catch`) upon finishing.

Most of the time, you will consume an a already-created promises, but it important to understand how to create a promise.

Here is a basic example using function that "generates" a promise:

```js
const getHello = () => new Promise((resolve) => resolve("Hello World!"));

getHello().then((result) => {
  console.log(result);
});
```

Here is an example utilizing `reject`:

```js
const addAsync = (x, y) => {
  return new Promise((resolve, reject) => {
    if (x === undefined || y === undefined) {
      reject(new Error("Must provide two parameters"));
    } else {
      resolve(x + y);
    }
  });
};
```

Aren't promises just callbacks with `.then()`?

Well, `.then()` and `.catch()` always return Promises. That enables us to create arbitrary long chains of method calls:

```javascript
asyncFunc1()
  .then((result1) => {
    /*···*/
    return asyncFunc2();
  })
  .then((result2) => {
    /*···*/
    return syncFunc3();
  })
  .then((result3) => {
    /*···*/
    return result;
  })
  .catch((err) => {
    /*···*/
    return "default value";
  });
```

Lets create the infamous logging example using promises.

1. Create a `promise-logging.js`.
1. Write a code that does the same as the code in [Callbacks Execution order](#execution-order) but using promises. Commit and push your changes.
1. Write a code that does the same as the code in [Callbacks Error Handling](#error-handling) but using promises.

   - Create a `maybeLog` function that returns a promise that simulate a logging that may fail.
   - Handle the error:
     - If the error is thrown, log the error and stop the execution.
     - If the error is not thrown, log the string `"4"` as usual and continue to step 5.
   - Commit and push your changes.

1. Write a code that does the same as the code in [Callbacks Pass data](#pass-data) but using promises.

   - Replace the `maybeLog` function with function that resolve with the random number (like the callback example).
   - Handle the results in step 4:

     - If the results is bigger then `0.9` log `"4: good result"`
     - If the results is smaller then `0.8` log `"4: bad result"`

1. Write a code that does the same as the code in [Callbacks Concurrent execution](#concurrent-execution) but using promises. You may add the [After Concurrent job](#after-concurrent-execution---optional).

Commit and push your changes.

#### Promises - Questions

1. What is the advantage and the disadvantage of using promises as a solution for the async problem?

#### Promises - Worth Knowing (Optional)

These topics are not covered in this chapter but is worth knowing:

- `.finally()`
- `util.promisify()`

### Async Await

Async Await is a new way to write asynchronous code and is [kind a](https://mathiasbynens.be/notes/async-stack-traces) "syntactic sugar" for promises. Moreover it is has a better DX (async stack trace support and debug step through)

An async function is a function declared with the `async` keyword, and the `await` keyword is permitted within it. The async and await keywords enable asynchronous, promise-based behavior to be written in a cleaner style, avoiding the need to explicitly configure promise chains.

Here is a basic example:

```js
async function asyncExample(value) {
  const syncRes = syncOperation(value);
  const resultsFromAsync = await asyncOperation(value);
  const asyncRes = await anotherAsyncOperation(resultsFromAsync);
  const res = { asyncRes, syncRes };
  return res;
}
```

Lets refactor the `promise-logging.js` using async await:

1. Create a `async-await-logging.js`.
2. Change the `setTimeout` to promise based using `node:timers/promises`:

   ```js
   import { setTimeout } from "node:timers/promises";
   ```

3. Write a code that does the same as the code in [Callbacks Execution order](#execution-order) but using promises. Commit and push your changes.
4. Write a code that does the same as the code in [Callbacks Error Handling](#error-handling) but using promises. Commit and push your changes.
5. Write a code that does the same as the code in [Callbacks Pass data](#pass-data) but using promises. Commit and push your changes.
6. Write a code that does the same as the code in [Callbacks Concurrent execution](#concurrent-execution) but using Async Await. You may add the [After Concurrent job](#after-concurrent-execution---optional).

Commit and push your changes.

#### Async Await - Questions

1. What is the advantage and the disadvantage of using async await as a solution for the async problem?
2. Should we use await inside `for` or `while` loop?
3. Should we use await inside a `forEach` loop?

#### Async Await - Worth Knowing (Advanced)

These topics are not covered in this chapter but is worth knowing:

- Top level await
- Async Iterators (`for await`)
- `return await` in async function

### Promise functions

The `Promise` class has [static](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static) [combinator](https://dev.to/gcanti/functional-design-combinators-14pn) functions that help us work with arrays of promises.

#### Promise.all()

`Promise.all()` is a function Which get array of promises and returns a single `Promise` which is:

- Fulfilled with the array of the fulfillment values of the input promises.
- Rejected if at least one Promise is rejected. The value is the rejection value of that Promise.

Something like this:

```javascript
[...promises] => Promise([...res])
```

More accurate in typescript syntax (Advanced):

```typescript
Promise.all<T>(promises: Iterable<Promise<T>>): Promise<Array<T>>
```

Promise.all is important because it let us execute concurrent jobs on arrays using asynchronous `.map()`.

Here is an abstract Example:

```javascript
Promise.all(arr.map(async (element) => await asyncLogic(element)));
```

Let's create an practical example!

`downloadText()` uses the Promise-based [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) API to download a text file into a local directory called `downloads`.

```javascript
const downloadText = async (url) => {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to download ${url} - ${res.statusText}`);
  const text = await res.text();
  const filePath = join("downloads", basename(url));
  await writeFile(filePath, text);
};
```

Create a function called `downloadTextFiles` which get an array of urls and download all the files into the `downloads` directory.
Add log before and after each download, and after all downloads are done.

What is the execution order of the logs?

Test your function using this example:

```javascript
const files = ["sample1.txt", "sample2.txt", "sample3.txt"];

const urls = files.map(
  (fileName) => `https://filesamples.com/samples/document/txt/${fileName}`
);

await downloadTextFiles(urls);
[label](Asynchronous - Javascript.md);
```

#### Promise.allSettled()

`Promise.allSettled()` is a function Which get array of promises and returns a single `Promise` which is fulfilled when all promises are settled.

The fulfillment value is an array of the objects with the result of the promises.

Something like this:

```javascript
[...promises] => Promise([
  {
    status: 'fulfilled' | 'rejected',
    [value | reason]: res | err
  },
  ...,
])
```

More accurate in typescript syntax (Advanced):

```typescript

Promise.allSettled<T>(promises: Iterable<Promise<T>>): Promise<Array<SettlementObject<T>>>

type SettlementObject<T> = FulfillmentObject<T> | RejectionObject;

interface FulfillmentObject<T> {
  status: 'fulfilled';
  value: T;
}

interface RejectionObject {
  status: 'rejected';
  reason: unknown;
}
```

Wow, this looks pretty exhausting. Why using `Promise.allSettled()` instead of `Promise.all()`?

Unless there is an error when iterating over promises, the output Promise is never rejected. This lets us execute asynchronous functions in concurrent using `map()` without throwing if some "jobs" failed.

Lets fix the `downloadTextFiles` to use `Promise.allSettled()` instead of `Promise.all()`. After the download is finished, print the number of failed downloads and the reason for the failure.

You can test your function using this example:

```js
const files = [
  "not-exists1.txt",
  "sample1.txt",
  "sample2.txt",
  "sample3.txt",
  "not-exists2.txt",
];
```

should print after all downloads are done:

```bash
Failed to download 2 files:
    Failed to download https://filesamples.com/samples/document/txt/not-exists1.txt - Not Found
    Failed to download https://filesamples.com/samples/document/txt/not-exists2.txt - Not Found
```

### Promise functions - Worth Knowing

These topics are not covered in this chapter but is worth knowing:

- `Promise.race()`
- `Promise.any()`

### Event handlers (Optional)

> **NOTE**: I recommend to advice with your mentor if you should learn this section and how much time you should spend on it.

Node.js is famous for its asynchronous and event-driven nature.

Node has a built-in event emitter that allows us to create event-driven programs using the [events](https://nodejs.org/api/events.html) module.

Here is a basic example:

```js
const EventEmitter = require("node:events");
const eventEmitter = new EventEmitter();

eventEmitter.on("start", () => {
  console.log("started");
});

eventEmitter.emit("start");
// logs "started"
```

An event handler is a particular type of callback.

Usually we prefer using promises to handle async operations but event handlers are still useful in some cases.

Lets create the `callbacks-logging.js` using event handlers.

1. Create a `event-handler.js`.
1. Write a code that does the same as the code in [Callbacks Execution order](#execution-order) but using event handlers.

   Commit and push your changes.

1. Write a code that does the same as the code in [Callbacks Error Handling](#error-handling) but using event handlers.

   Commit and push your changes.

1. Write a code that does the same as the code in [Callbacks Pass data](#pass-data) but using event handlers.

   Commit and push your changes.

1. Write a code that does the same as the code in [Callbacks Concurrent execution](#concurrent-execution) but using event handlers. You may add the [After Concurrent job](#after-concurrent-execution---optional).

   Commit and push your changes.

#### Event handlers - Questions

1. What is the advantage and the disadvantage of using event handlers as a solution for the async problem?
2. When do you think this solution will be useful?

#### Event handlers - Worth Knowing (Optional)

These topics are not covered in this chapter but is worth knowing:

- `AbortSignal`
- `captureRejections` and async event handlers (not recommended)

## WIP: Advanced Topics (Optional)

If you finish the above exercises in the _"Estimation time"_ you can move on to the advanced topics.

this is a work in progress and will be updated soon.

### Node.js Event Loop

- [What the heck is the event loop anyway? | Philip Roberts | JSConf EU](https://www.youtube.com/watch?v=8aGhZQkoFbQ)
- [The Node.js Event Loop, Timers, and process.nextTick()](https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick)
- [Don't Block the Event Loop (or the Worker Pool)](https://nodejs.org/en/docs/guides/dont-block-the-event-loop/)

- `process.nextTick queue`, `promises microtask queue`, `macrotask queue`

## Next steps

I Want YOU To [Join The Army](Node/Call-Of-Duty).
