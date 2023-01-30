# NodeJS and JavaScript Basics

-- *Estimation time: 1-3 Days*

---
NodeJS is a JavaScript runtime built on Chrome's V8 JavaScript engine.

This is a basic introduction to Node JS and JavaScript.

***Learning objectives:***

At the end of this learning path, you'll be able to:

- Install NodeJS project packages
- Create a new project
- Write an efficient asynchronous code

---
*Send me back [home](home)*

[[*TOC*]]

---
**Learning note**: all links in this path are reading tutorials. You can read them but you can watch a youtube crash course. if you find useful links, please share them with me.

Here is some examples links:

- [MDN web docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction)
- [nodejs official learn](https://nodejs.dev/learn)

## Install NodeJS using NVM

NVM (Node.js Version Manager) allows you to quickly install and use different versions of node via the command line.

Even if you only need a single version of Node.js right now, It is still recommend using nvm because it allows you to switch between different versions of Node (depending on the requirements of your project) with minimal hassle.

to install nvm:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```

Check if node is installed:

```bash
nvm --version
```

For more information you can use the repository [nvm-sh/nvm](https://github.com/nvm-sh/nvm)

Optional: [Lazy load nvm for faster shell start](http://broken-by.me/lazy-load-nvm/)

## JavaScript

JavaScript is a programming language that is used to create web applications.

Make sure you understand JavaScript before you start learning Node.

### JavaScript - The basics

You should be familiar with the following concepts:

- Variables
- Operators
- Data types
- Control flow
- Functions
- Objects
- Classes
- Errors
- Modules
- Callbacks
- Events
- Promises

### JavaScript - Advanced Topics (Optional)

Some advanced concepts that worth Knowing (skip this part if you are new to JavaScript):

- Closures
- Currying
- Pass arguments: call by value, call by sharing, call by reference
- Copy, deep clone, shallow clone.
- `this` keyword
- Function.prototype: `bind`, `apply`, `call`
- Hoisting

#### JavaScript - questions (Advanced Topics)

Some questions about the Advanced Topics (skip this part if you are new to JavaScript):

1. What is the output of this code?

    ```js
      const count = 0;

      const logCount = () => {
        console.log(count);
      }

      if (count === 0) {
        const count = 1;
        console.log(count);
        logCount();
      }
    ```

2. Write a function `multiply`:
   - If `multiply(num1, num2)` is invoked with 2 arguments, it should return the multiplication of the 2 arguments.
   - If `multiply(num1)` is invoked with 1 argument the function should return another function. The returned function when called with `num2` performs the multiplication `num1 * num2`

    ```js
    multiply(4, 5); // => 20
    multiply(3, 3); // => 9
    const double = multiply(2);
    double(5);  // => 10
    double(11); // => 22
    ```

3. What is the output of this code?

    ```js
      function changeStuff(num, obj1, obj2) {
        num = num * 10;
        obj1.key = "changed";
        obj2 = { key: "changed" };
      }

      const num = 10;
      const obj1 = { key: "unchanged" };
      const obj2 = { key: "unchanged" };

      changeStuff(num, obj1, obj2);

      console.log(num);
      console.log(obj1.key);
      console.log(obj2.key);
    ```

4. What is the output of this code?

    ```js
    const user = {
      firstName: 'Lady',
      lastName: 'Gaga',
      address: {
        street: 'David king',
        city: 'TLV',
        country: 'IL'
      }
    };

    const copiedUser = { ...user };

    copiedUser.firstName = 'Jane';
    copiedUser.address.street = 'Back street';

    console.log(copiedUser);
    console.log(user);
    ```

5. What is the output of this code? How do you fix it?

  ```js
  class LateBloomer {
    constructor() {
      this.petalNumber = Math.floor(Math.random() * 12) + 1;
    }

    bloomInDelay(delay) {
      setTimeout(this.declare, delay);
    }
    
    declare() {
      console.log(`I am a beautiful flower with ${this.petalNumber} petals!`);
    }
  }

  const flower = new LateBloomer();
  const oneSecondDelay = 1000
  flower.bloomInDelay(oneSecondDelay);
  ```

### JavaScript - Worth knowing (Advanced)

Some advanced concepts that worth mentioning:

- Bitwise operators
- Unicode
- Symbols
- Prototypes
- Maps, Sets
- Iterators
- Generators
- WeakMaps, WeakSets
- Typed Arrays
- Proxies

## Basic NodeJS

Node.js is an open-source and cross-platform JavaScript runtime environment.
Node.js runs the V8 JavaScript engine, the core of Google Chrome, outside of the browser. This allows Node.js to be very performant.

A Node.js app runs in a single process, without creating a new thread for every request. Node.js provides a set of asynchronous I/O primitives in its standard library that prevent JavaScript code from blocking.

Before you continue, make sure you are familiar with the following concepts:

- Package manger (`npm`)
- `package.json`, `package-lock.json`
- File system (`node:fs`)
- Environment variables (`process.env`)

### NodeJs - Advanced Topics (Optional)

Some advanced concepts that you should be aware of, skip this section if you are new to NodeJS.

- Streams
- Buffers
- CJS vs ESM

More advanced concepts is detailed in later [section](#wip-advanced-topics-optional)

## Asynchronous JavaScript

Asynchronous programming is a technique that enables your program to start a potentially long-running task and still be able to be responsive to other events while that task runs, rather than having to wait until that task has finished. Once that task has finished, your program is presented with the result.

Many functions provided by nodeJS and browsers, can potentially take a long time, and therefore, are asynchronous.

***After each mini chapter in this path, create a "Pull Request" and/or talk to your mentor to validate your knowledge.***

### Introduction

We will learn a several techniques to make our programs asynchronous.
Some of these techniques are legacy and not recommended for new projects but they are still important to understand.

1. Read the following script:

    ```js
    // This function use setTimeout to simulate a long running task
    const logAfterMs = (message, ms) => {
      setTimeout(() => console.log(message), ms)
    };

    console.log('1');
    logAfterMs('2', 0);
    logAfterMs('3', 10);
    logAfterMs('4', 5);
    console.log('5');
    ```

    What do you think will be the output?

2. Create a `intro.js` file and run it in the terminal.

    ```bash
    node intro.js
    ```

    What is the output? why?

### Callbacks

A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

Here is a example to synchronous callback:

```js
function greeting(name) {
  console.log(`Hello, ${name}`);
}

function addUser(callback) {
  const userName = "David"
  callback(userName);
}

addUser(greeting);
```

Or in anonyms arrow function style:

```js
function addUser(callback) {
  const userName = "David"
  callback(userName);
}

addUser((name) => {
  console.log(`Hello, ${name}`);
});
```

However, callbacks are often used to continue code execution after an **asynchronous** operation has completed - these are called asynchronous callbacks.

Its is often to named callbacks function `done` - Because we are calling them when the operation done:

```js
function addUser(done) {
  const userName = "David";
  // do something
  done();
}
```

*Note: Asynchronous Callback are legacy techniques and came before promises.*

#### Execution order

Lets fix the above `intro.js` script by adding a callback function.

Create a `callbacks-logging.js`.

1. Write a code that log the string `"1"`.
2. Write a code that log the string `"2"` 0 ms after the log `"1"` above has finished.
3. Write a code that log the string `"3"` 10 ms after the the log `"2"` above has finished.
4. Write a code that log the string `"4"` 5 ms after the the log `"3"` above has finished.
5. Write a code that log the string `"5"` after all the logs.

Commit and push your changes.

#### Error Handling

In Node.js, it is considered standard practice to handle errors in asynchronous functions by returning them as the **first argument** to the current function's callback. If there is an error, the first parameter is passed an Error object with all the details. Otherwise, the first parameter is null.

Here is an example with synchronous code:

```js
const exampleValue = Math.round(Math.random()); // 0 or 1

const validateTruthy = function (value, done) {
  if (value) return done();
  done(new Error(`Value ${value} is not Truthy!`));
}

validateTruthy(exampleValue, (err) => {
  if (err) console.error(err);
  else console.log('Great success!');
});
```

We want to be able to handle errors in our logging code workflow.
Lets say the `"3"` logging may fail.
In this case we will retry the logging again once. If the logging fails again we will log the error and stop the execution.

1. Create a function that after 10 ms:
    - 50%: logs the string `"3"`
    - 50%: throws an error `"Logging failed"`

2. Replace step 3 (logging `"3"`) with this function.
3. Handle the error in step 4 (logging `"4"`).
    - If the error is thrown, retry the logging. if the logging fails again, log the error and stop the execution.
    - If the error is not thrown, log the string `"4"` as usual and continue to step 5.

Commit and push your changes.

#### Pass data

We want our code to pass results from async operations to other.
Lets say the `"3"` logging has two variables which we want to pass to the `"4"` logging,
and `"4"` logging has result value. We want to pass this result to the `"5"` logging.

1. Create a function that after 5 ms:
    - 50%: logs the string `"4"` and decide that result is `"result 1"`
    - 50%: logs the string `"4"` and decide that result is `"result 2"`
2. Replace step 4 (logging `"4"`) with this function.
3. Handle the result in step 5:
    - If the result is `"result 1"` log `"5: result 1"`
    - If the result is `"result 2"` log `"5: result 2"`

4. Add a **two** variables (anything) to the `"3"` logging and use it (however you like) in the `"4"` logging.

Commit and push your changes.

#### "Parallel" execution

We want to be able to run multiple async operations in parallel.
Lets say that after the `"4"` logging want to print the `"5 result x"` logging and in "parallel" run functions that logs the string `"hi 5"` after 5 ms and `"take 5"` after 6 ms.

1. Create a function that after 5 ms logs the string `"hi 5"`
2. Create a function that after 6 ms logs the string `"take 5"`
3. Execute the `"5 result x"`, `"hi 5"`, ``"take 5"` functions logging after the `"4"` logging.

#### After "Parallel" execution - (Optional)

We want to be able to run async operations after parallel execution is done.
Lets say that after the step 5 (logging `"5 result x"`, `"hi 5"`, `"take 5"`) we want to log `"6"` after 10 ms;

How do you implement a job after "Parallel" execution?

#### Callbacks - Questions

1. What is the advantage and the disadvantage of using callbacks as a solution for the async problem?
2. When do you think this solution will be useful?
3. What is callback hell?

#### Callbacks - Worth Knowing (Optional)

This topics are not covered in this chapter but is worth knowing:

- [Async.js](https://caolan.github.io/async/v3/)

### Event handlers (Optional)

Node.js is famous for its asynchronous and event-driven nature.

Node has a built-in event emitter that allows us to create event-driven programs using the [events](https://nodejs.org/api/events.html) module.

Here is a basic example:

```js
const EventEmitter = require('node:events');
const eventEmitter = new EventEmitter();

eventEmitter.on('start', () => {
  console.log('started');
});

eventEmitter.emit('start');
//the event handler function is triggered, and we get the console log.
```

An event handler is a particular type of callback.

Lets create the `callbacks-logging.js` using event handlers.

1. Create a `event-handler.js`.
2. Write a code that does the same as the code in [Callbacks Execution order](#execution-order) but using event handlers.

    Commit and push your changes.
3. Write a code that does the same as the code in [Callbacks Error Handling](#error-handling) but using event handlers.

    Commit and push your changes.
4. Write a code that does the same as the code in [Callbacks Pass data](#pass-data) but using event handlers.

    Commit and push your changes.
5. Write a code that does the same as the code in [Callbacks "Parallel" execution](#parallel-execution) but using event handlers. You may add the [After "Parallel" job](#after-parallel-execution---optional) if you implement it in the callbacks section.

    Commit and push your changes.

#### Event handlers - Questions

1. What is the advantage and the disadvantage of using event handlers as a solution for the async problem?
2. When do you think this solution will be useful?

#### Event handlers - Worth Knowing (Optional)

This topics are not covered in this chapter but is worth knowing:

- `AbortSignal`
- `captureRejections` and async event handlers (not recommended)

### Promises

A `Promise` is an object representing the eventual completion or failure of an asynchronous operation.

Once a promise has been called, it will start in a pending state. This means that the calling function continues executing, while the promise is pending until it resolves, giving the calling function whatever data was being requested.

The created promise will eventually end in a resolved state, or in a rejected state, calling the respective callback functions (passed to `then` and `catch`) upon finishing.

Most of the time, you will consume an a already-created promises, but it important to understand how to create a promise.

Here is a basic example:

```js
const doSomething = () => {
  return new Promise(resolve => resolve('Hello World!'));
};

doSomething().then(result => {
  console.log(result);
});
```

Here is an example utilizing `reject`:

```js
const addAsync = (x, y) => new Promise((resolve, reject) => {
  if (x === undefined || y === undefined) {
    reject(new Error('Must provide two parameters'));
  } else {
    resolve(x + y);
  }
});
```

Aren't promises just callbacks with `.then()`?

`.then()` and `.catch()` always return Promises. That enables us to create arbitrary long chains of method calls:

```javascript
asyncFunc1()
  .then(result1 => {
    /*···*/
    return asyncFunc2();
  })
  .then(result2 => {
    /*···*/
    return syncFunc3();
  })
  .then(result3 => {
    /*···*/
    return result;
  })
  .catch(err => {
    /*···*/
    return 'default value';
  })
```

Lets create the infamous logging example using promises.

1. Create a `promise-logging.js`.
2. Write a code that does the same as the code in [Callbacks Execution order](#execution-order) but using promises. Commit and push your changes.
3. Write a code that does the same as the code in [Callbacks Error Handling](#error-handling) but using promises. Commit and push your changes.
4. Write a code that does the same as the code in [Callbacks Pass data](#pass-data) but using promises. Commit and push your changes.
5. Write a code that does the same as the code in [Callbacks "Parallel" execution](#parallel-execution) but using promises. Commit and push your changes.
You may add the [After "Parallel" job](#after-parallel-execution---optional) if you implement it in the callbacks section.

#### Promises - Questions

1. What is the advantage and the disadvantage of using promises as a solution for the async problem?

#### Promises - Worth Knowing (Optional)

This topics are not covered in this chapter but is worth knowing:

- `.finally()`
- `util.promisify()`

### Async Await

Async Await is a new way to write asynchronous code and is a "syntactic sugar" for promises.

An async function is a function declared with the `async` keyword, and the `await` keyword is permitted within it. The async and await keywords enable asynchronous, promise-based behavior to be written in a cleaner style, avoiding the need to explicitly configure promise chains.

Here is a basic example:

```js
async function asyncExample(value) {
  const syncRes = syncOperation(value);
  const asyncRes = await asyncOperation(value);
  const res = { asyncRes, syncRes };
  return res;
}
```

Lets refactor the `promise-logging.js` using async await:

1. Create a `async-await-logging.js`.
2. Write a code that does the same as the code in [Callbacks Execution order](#execution-order) but using promises. Commit and push your changes.
3. Write a code that does the same as the code in [Callbacks Error Handling](#error-handling) but using promises. Commit and push your changes.
4. Write a code that does the same as the code in [Callbacks Pass data](#pass-data) but using promises. Commit and push your changes.
5. Write a code that does the same as the code in [Callbacks "Parallel" execution](#parallel-execution) but using promises. Commit and push your changes.
You may add the [After "Parallel" job](#after-parallel-execution---optional) if you implement it in the callbacks section.

#### Async Await - Questions

1. What is the advantage and the disadvantage of using async await as a solution for the async problem?
2. Why should we never use await inside a loop?

#### Async Await - Worth Knowing (Advanced)

This topics are not covered in this chapter but is worth knowing:

- Top level await
- `for await...of`

### Promise combinator functions

Promise [combinator](https://dev.to/gcanti/functional-design-combinators-14pn) functions help us working with arrays of promises

#### Promise.all()

`Promise.all()` is a function Which get array of promises and returns a single `Promise` which is:

- Fulfilled with the array of the fulfillment values of the input promises.
- Rejected if at least one Promise is rejected. The value is the rejection value of that Promise.

Promise.all is important because it let us execute "parallel" jobs using asynchronous `.map()`.

Here is an abstract Example:

```javascript
Promise.all(arr.map(async (element) => await logic()));
```

Let's create an practical example!

`downloadText()` uses the Promise-based [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) API to download a text file as a string

```javascript
async function downloadText(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(res.statusText);
  else return res.text();
}
```

Create a function called `downloadTextFiles` that get an array of urls and return an array of strings.

You can test your function using this example:

```javascript
const urls = [
  'https://filesamples.com/samples/document/txt/sample1.txt',
  'https://filesamples.com/samples/document/txt/sample2.txt',
];
```

#### Promise.allSettled()

`Promise.allSettled()` is a function Which get array of promises and returns a single `Promise` which is fulfilled when all promises are settled.

The fulfillment value is an array of the objects with the result of the promises:

```javascript
{
  status: 'fulfilled' | 'rejected',
  [value | reason]: res | err
}
```

Why using `Promise.allSettled()` instead of `Promise.all()`?

Unless there is an error when iterating over promises, the output Promise out is never rejected. This is lets use executes asynchronous functions in parallel using `map()` without stopping if some "jobs" failed.

Lets fix the `downloadTextFiles` to return array of strings which contain all the successful downloaded text.

### Promise combinator functions - Worth Knowing

This topics are not covered in this chapter but is worth knowing:

- `Promise.race()`
- `Promise.any()`

## WIP: Advanced Topics (Optional)

If you finish the above exercises in the *"Estimation time"* you can move on to the advanced topics.

this is a work in progress and will be updated soon.

### Node.js Event Loop

- [What the heck is the event loop anyway? | Philip Roberts | JSConf EU](https://www.youtube.com/watch?v=8aGhZQkoFbQ)
- [The Node.js Event Loop, Timers, and process.nextTick()](https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick)
- [Don't Block the Event Loop (or the Worker Pool)](https://nodejs.org/en/docs/guides/dont-block-the-event-loop/)

- `process.nextTick queue`, `promises microtask queue`, `macrotask queue`

### The internal of node.js

- garbage collection
- v8
- libuv

### Multi-threading

- Cluster
- Child Processes
- Worker threads
- Thread pools

### Additional Topics

- Async hooks
- C/C++ addons
