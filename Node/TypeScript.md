# Typescript

-- *Estimation time: 1-2 Days*

---
TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.

This is a basic introduction to Typescript.

***Learning objectives:***

At the end of this learning path, you'll be able to:

- Create a new TS project
- Run TS project
- Write an efficient type-safe code in TypeScript

---
*Send me back [home](home)*

[[*TOC*]]

---
**Learning note**: all links in this path are reading tutorials. You can read them but you can watch a youtube crash course. if you find useful links, please share them with me.

Here is some examples links:

- [Typescript](https://www.typescriptlang.org/)
- [Typescript handbook](https://www.typescriptlang.org/docs/handbook/index.html)
- [Total typescript](https://www.totaltypescript.com/)

## Get Started with typescript

You can start "playing" with typescript online in [sandbox](https://www.typescriptlang.org/play).

In order to run it locally we need to install typescript and then compile our code into executable javascript.

### Install

TypeScript is available as a package on the npm [registry](https://www.npmjs.com/package/typescript).

You can install it as dev-dependency in your project using:

```bash
npm install typescript --save-dev
```

if you want typescript support in `node:` imports and global node variables you need to install [`@types/node`](https://www.npmjs.com/package/@types/node)

```bash
npm install --save @types/node
```

### TSConfig

Typescript compiler needs instructions to compile. We can specify the compiler options in config file called [`tsconfig`](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html).

You can initialize the compiler options using `tsc` cli `--init` flag:

```bash
npx tsc --init
```

This will create a basic `tsconfig.json` file.

My recommended `tsconfig.json` for modern node applications is:

`compilerOptions`:

- `"lib": ["es2022"],` - Tells TS that it's okay to use functions and properties introduced in ES2022 or earlier

- `"module": "es2022"` - Tells TS that this project use ES Modules

- `"moduleResolution": "node"` - Tells TS that we are using Node.js's rules for resolving modules

- `target": "ES2022"` - Tells TS that it's okay to output JavaScript syntax with features from ES2022  instead of embedding a polyfill.

- `"strict": true` - Tells TS to enables a wide range of type checking behavior that results in stronger guarantees of program correctness.

Here is the complete recommended `tsconfig.json` file:

```json
{
  "compilerOptions": {
    "lib": ["es2022"],
    "module": "es2022",
    "target": "es2022",
    "moduleResolution": "node",
    "strict": true,
    "outDir": "./dist",
  },
  "include": [
    "./src/**/*",
  ],
  "exclude": [
    "node_modules",
    "coverage",
    "dist",
  ]
}
```

Here is the full [TSConfig Reference](https://www.typescriptlang.org/tsconfig)

### Basic Compile

You can use the `tsc` cli using `npx`:

```bash
npx tsc
```

Or you can create a npm script:

In your `package.json`:

```json
  "scripts": {
    "build": "tsc"
  },
```

And then:

```bash
npm run build
```

Test it! create `.ts` file and run the compile `.js`.

### ts-node (Optional)

[`ts-node`](https://www.npmjs.com/package/ts-node) is a TypeScript execution engine and REPL for Node.js. It "Just In Time" (JIT) transforms TypeScript into JavaScript, enabling you to directly execute TypeScript on Node.js without precompiling.

### Other JS runtime (Advanced)

Some modern JavaScript engines runtime come with built-in support for TypeScript:

- [Deno](https://deno.land/) is a modern runtime for JavaScript and TypeScript that uses V8 and is built in Rust. Deno has "First-class" support for TS and its "Understand" (Using JIT) Typescript so you execute your `.ts` using `deno`.  

- [Bun](https://bun.sh) is a modern JavaScript runtime like Node or Deno. Bun uses the JavaScriptCore engine and was written in ZIG. Bun is designed as a drop-in replacement for your current JavaScript & TypeScript apps or scripts so you can run `.ts` files directly.

## TypeScript - The basics

You should be familiar with the following concepts:

You can read them all in the [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html). Especially the [everyday-types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)

- `string`, `number`, and `boolean`
- Array
- Tuple
- Functions
- Object types
- Type Aliases (`type`)
- Interfaces
- `any` and `unknown`
- Union Types (`|`)
- Intersection Types (`&`)
- Function type expression
- Passing Type Arguments (`<Type>`)
- Type Assertions (`as`, `!`)
- Literal Types and `as const`
- `null`, `undefined`, `void`, and `never`
- Narrowing and Type guards
- Global utility Types (e.g `Omit`, `Record`, `Promise`, etc.)

### Beginners Typescript Workshops

[Here](https://github.com/total-typescript/beginners-typescript-tutorial) is a great tutorial for all the basics. Do it yourself :smile:

### Convention and my recommendations

- Write a little TS as you can! TS is very "smart" and most of the time inferred types will be more "specific". Also this will help your code readability.
  - Don't declare types in variables
  - Don't declare return types of simple functions
- Prefer `type` aliases over interfaces
- Don't use enums, prefer union types or const objects.
- Don't use `Function`, `Object`, `String`, `Number`, and `Boolean` (Capital letters)

## TypeScript - Advanced (optional)

- Enums
- Generics
- type predicates (`is`)
- Discriminated unions
- Exhaustiveness checking
- Parameter Destructuring
- Function Overloads
- Index Signatures
- `keyof` type operator
- `typeof` type operator
- Indexed Access Types
- Conditional Types and `infer`
- Distributive Conditional Types (`[T] extends [P]`)
- Mapped Types (`in`)
- Template Literal Types

## Project

Talk with your mentor about the project.
