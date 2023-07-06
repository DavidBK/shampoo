# NodeJS and JavaScript

-- _Estimation time: 1-4 Days_

---

This is a basic introduction to Node JS and JavaScript.

**_Learning objectives:_**

At the end of this learning path, you'll be able to:

- Install NodeJS project packages
- Create a new project
- Know basic programming using JavaScript
- Know JavaScript concepts

---

_Send me back [home](home)_

[[_TOC_]]

---

**Learning note**: all links in this path are reading tutorials. You can read them but you can watch a youtube crash course. if you find useful links, please share them with me.

Here is some examples links:

- [MDN web docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction)
- [nodejs official learn](https://nodejs.dev/learn)

## Introduction

JavaScript is a programming language that is used to create web applications.

Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.

In Human words: NodeJS is a program that allows you to run JavaScript on any computer (and not just in the browser).
So in order to run JavaScript on your computer, you need to install NodeJS.

## Install NodeJS using NVM

[NVM](https://github.com/nvm-sh/nvm) (Node.js Version Manager) allows you to quickly install and use different versions of node via the command line.

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

Optional: [zsh plugin with lazy load](https://github.com/lukechilds/zsh-nvm) Or [Lazy load nvm for faster shell start](http://broken-by.me/lazy-load-nvm/).
If you follow the [setup](../Setup) instructions, you already have this plugin.

## JavaScript

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

### JavaScript - More Topics

Some advanced concepts that worth knowing, learn them after you understand the basics:

- Arrays methods - `map`, `filter`, `reduce` etc.
- Closures
- Pass arguments: call by value, call by sharing, call by reference
- Copy, deep clone, shallow clone.
- `this` keyword
- Function.prototype: `bind`, `apply`, `call`

### JavaScript - questions (More Topics)

Some questions about the more advanced topics:

1. What is the output of this code?

   ```js
   const count = 0;

   const logCount = () => {
     console.log(count);
   };

   if (count === 0) {
     const count = 1;
     console.log(count);
     logCount();
   }
   ```

1. What is the output of this code?

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

1. What is the output of this code?

   ```js
   const user = {
     firstName: "Lady",
     lastName: "Gaga",
     address: {
       street: "David king",
       city: "TLV",
       country: "IL",
     },
   };

   const copiedUser = { ...user };

   copiedUser.firstName = "Jane";
   copiedUser.address.street = "Back street";

   console.log(copiedUser);
   console.log(user);
   ```

1. What is the output of this code? Fix the code.

   ```js
   class LateBloomer {
     #delay;

     constructor(delay = 1000) {
       this.#delay = delay;
       this.petalNumber = Math.floor(Math.random() * 12) + 1;
     }

     bloom() {
       setTimeout(this.#declare, this.#delay);
     }

     #declare() {
       console.log(`I am a beautiful flower with ${this.petalNumber} petals!`);
     }
   }

   const flower = new LateBloomer();
   flower.bloom();
   ```

1. Create a function that get array of numbers. Each number represent a radius. The function should return the sum of the areas of all circles.
   If the number is negative, ignore it.

   for example:

   ```js
   const circlesRadiuses = [1, -100, 2, 3, 4, -5, 5];

   const sumOfAreas = (circles) => {
     // your code here
   };

   console.log(sumOfAreas(circles)); // 153.93804002589985
   ```

1. Write a function `once` that accepts a function `fn` as input and return a new function that is identical to the original function except that it ensures `fn` is called at most once.

   The first time the returned function is called, it should return the same result as fn.
   Every subsequent time it is called, it should return undefined.

### JavaScript - Worth knowing (Advanced)

Some advanced concepts that worth mentioning, don't learn them now but know that they exist:

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

## NodeJS

Node.js is an open-source and cross-platform JavaScript runtime environment.
Node.js runs the V8 JavaScript engine, the core of Google Chrome, outside of the browser. This allows Node.js to be very performant.

A Node.js app runs in a single process, without creating a new thread for every request. Node.js provides a set of asynchronous I/O primitives in its standard library that prevent JavaScript code from blocking.

### Basic NodeJS Concepts

Before you continue, make sure you are familiar with the following concepts:

- Package manger (`npm`)
- `package.json`, `package-lock.json`
- File system (`node:fs`)
- Environment variables (`process.env`)

### WIP: Basic NodeJS - questions

### WIP: Basic Testing in NodeJS

## Worth Mentioning (Advanced)

Some advanced concepts that worth mentioning, don't learn them now but know that they exist:

- Streams
- Buffers
- CJS vs ESM

The internal of node.js:

- garbage collection
- v8
- libuv

Multi-threading:

- Cluster
- Child Processes
- Worker threads
- Thread pools

JavaScript engine optimization:

- [JavaScript engine fundamentals: Shapes and Inline Caches](https://mathiasbynens.be/notes/shapes-ics)
- Tail call optimization - [ECMMAScript](https://2ality.com/2015/06/tail-call-optimization.html) [implementations](https://world.hey.com/mgmarlow/what-happened-to-proper-tail-calls-in-javascript-5494c256)

Additional Topics:

- Asynchronous context tracking
- C/C++ addons

## Next steps

Let's get out of [sync](Node/Asynchronous-Javascript)!
