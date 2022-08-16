# NodeJS and JavaScript Basics

-- *Estimation time: 1-2 Days*

---
Node JS is a JavaScript runtime built on Chrome's V8 JavaScript engine.

This is a basic introduction to Node JS and JavaScript.

***Learning objectives:***
WIP

---
*Send me back [home](home)*

[[*TOC*]]

---
**Learning note**: all links in this path are reading tutorials. You can read them but you can watch a youtube crash course. if you find useful links, please share them with me.

Here is some examples links:

- [MDN web docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction)

## Install NodeJS using NVM

NVM (Node.js Version Manager) allows you to quickly install and use different versions of node via the command line.

Even if you only need a single version of Node.js right now, It is still recommend using nvm because it allows you to switch between different versions of Node (depending on the requirements of your project) with minimal hassle.

to install nvm:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```

For more information you can use the repository [nvm-sh/nvm](https://github.com/nvm-sh/nvm)

## Basic JavaScript

JavaScript is a programming language that is used to create web applications.

Make sure you understand JavaScript before you start learning Node.

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

## Asynchronous JavaScript

Asynchronous programming is a technique that enables your program to start a potentially long-running task and still be able to be responsive to other events while that task runs, rather than having to wait until that task has finished. Once that task has finished, your program is presented with the result.

Many functions provided by nodeJS and browsers, can potentially take a long time, and therefore, are asynchronous.

***After each mini chapter in this path, create a "Pull Request" and/or talk to your mentor to validate your knowledge.***

### Introduction

We will learn a several techniques to make our programs asynchronous.
Some of these techniques are legacy and not recommended for new projects but still important to understand.

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
    node test.js
    ```

    What is the output? why?

### Callbacks

A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

Here is a example to synchronous callback:

```js
function greeting(name) {
  console.log(`Hello, ${name}`);
}

function processUserInput(callback) {
  const name = getName();
  callback(name);
}
```

However, callbacks are often used to continue code execution after an asynchronous operation has completed — these are called asynchronous callbacks.

Asynchronous Callback are legacy techniques and came before promises.

#### **Execution order**

Lets fix the above `intro.js` script by adding a callback function.

1. Create a `callbacks-logging.js`.
2. Write a code that log the string `"1"`.
3. Write a code that log the string `"2"` 0 ms after the log `"1"` above has finished.
4. Write a code that log the string `"3"` 10 ms after the the log `"2"` above has finished.
5. Write a code that log the string `"4"` 5 ms after the the log `"3"` above has finished.
6. Write a code that log the string `"5"` after all the logs.
7. Commit and push your changes.

#### **Error Handling**

We want to be able to handle errors in our code workflow.
Lets say the `"3"` logging may fail. in this case we will retry the logging again once. If the logging fails again we will log the error.

1. Create a function that after 10 ms:
    - 50%: logs the string `"3"`
    - 50%: throws an error `"Logging failed"`

2. Replace step 4 (logging `"3"`) with this function.
3. Handle the error:
    - If the error is thrown, retry once log the error.
    - If the error is not thrown, log the string `"3"` again.
4. Commit and push your changes.

#### **Pass data**

We want our code to pass results from async operations to other.
Lets say the `"4"` logging has result value. We want to pass this result to the `"5"` logging.
In addition, `"3"` logging has two variables which we want to pass to the `"4"` logging.

1. Create a function that after 5 ms:
    - 50%: logs the string `"4"` and decide that result is `"result 1"`
    - 50%: logs the string `"4"` and decide that result is `"result 2"`
2. Replace step 5 (logging `"4"`) with this function.
3. Handle the result in step 6:
    - If the result is `"result 1"` log `"5: result 1"`
    - If the result is `"result 2"` log `"5: result 2"`

4. Add a **two** variables (anything) to the `"3"` logging and use it (however you like) in the `"4"` logging.
5. Commit and push your changes.

#### **"Parallel" execution**

We want to be able to run multiple async operations in parallel.
Lets say that after the `"4"` logging want to print the `"5"` logging and in "parallel" run functions that logs the string `"hi 5"` after 5 ms and `"hi 6"` after 6 ms.

1. Create a function that after 5 ms logs the string `"hi 5"`
2. Create a function that after 6 ms logs the string `"hi 6"`
3. Execute the `"5 result x"`, `"hi 5"`, `"hi 6"` functions logging after the `"4"` logging.

#### **Questions**

1. What is the advantage and the disadvantage of using callbacks as a solution for the async problem?
2. When do you think this solution will be useful?
3. What is callback hell?

### **Event handlers**

Node.js is famous for its asynchronous and event-driven nature.

An event handler is a particular type of callback.

Lets create the `callbacks-logging.js` using event handlers.

1. Create a `event-handler.js`.
2. Add `const EventEmitter = require('node:events');` to the top of the file.
3. Write a code that does the same as the code in [Callbacks Execution order](#execution-order) but using event handlers.

    Commit and push your changes.
4. Write a code that does the same as the code in [Callbacks Error Handling](#error-handling) but using event handlers.

    Commit and push your changes.
5. Write a code that does the same as the code in [Callbacks Pass data](#pass-data) but using event handlers.

    Commit and push your changes.
6. Write a code that does the same as the code in [Callbacks "Parallel" execution](#parallel-execution) but using event handlers.

    Commit and push your changes.

#### **Question**

1. What is the advantage and the disadvantage of using event handlers as a solution for the async problem?
2. When do you think this solution will be useful?

### Promises

A Promise is an object representing the eventual completion or failure of an asynchronous operation.

Most of the time, you will consume an a already-created promises, but it important to understand how to create a promise.

In the logging example, we will create a promise and consume it using `then` and `catch`.

Lets create the infamous `callbacks-logging.js` using promises.

1. Create a `promise-logging.js`.
2. Write a code that does the same as the code in [Callbacks Execution order](#execution-order) but using promises. Commit and push your changes.
3. Write a code that does the same as the code in [Callbacks Error Handling](#error-handling) but using promises. Commit and push your changes.
4. Write a code that does the same as the code in [Callbacks Pass data](#pass-data) but using promises. Commit and push your changes.
5. Write a code that does the same as the code in [Callbacks "Parallel" execution](#parallel-execution) but using promises. Commit and push your changes.

### Async Await

Async Await is a new way to write asynchronous code and is a "syntactic sugar" for promises.

An async function is a function declared with the async keyword, and the await keyword is permitted within it. The async and await keywords enable asynchronous, promise-based behavior to be written in a cleaner style, avoiding the need to explicitly configure promise chains.

Lets refactor the `promise-logging.js` using async await.

1. Create a `async-await-logging.js`.
2. Write a code that does the same as the code in [Callbacks Execution order](#execution-order) but using promises. Commit and push your changes.
3. Write a code that does the same as the code in [Callbacks Error Handling](#error-handling) but using promises. Commit and push your changes.
4. Write a code that does the same as the code in [Callbacks Pass data](#pass-data) but using promises. Commit and push your changes.
5. Write a code that does the same as the code in [Callbacks "Parallel" execution](#parallel-execution) but using promises. Commit and push your changes.

## WIP: Advanced Topics (Optional)

If you finish the above exercises in the *"Estimation time"* you can move on to the advanced topics.

this is a work in progress and will be updated soon.

### Node.js Event Loop

- [What the heck is the event loop anyway? | Philip Roberts | JSConf EU](https://www.youtube.com/watch?v=8aGhZQkoFbQ)
- [The Node.js Event Loop, Timers, and process.nextTick()](https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick)
- [Don't Block the Event Loop (or the Worker Pool)](https://nodejs.org/en/docs/guides/dont-block-the-event-loop/)

### The internal of node.js

- garbage collection
- v8
- libuv

### Multi-threading

- Child Processes
- Worker threads
- Thread pools

### Additional Topics

- generators and iterators
- streams
- cluster
