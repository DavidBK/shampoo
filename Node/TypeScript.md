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
- [Type Challenges Repo](https://github.com/type-challenges/type-challenges)

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
npm install @types/node --save-dev
```

*Side Note: Sometimes You will need types in the [declaration file](https://www.typescriptlang.org/docs/handbook/2/type-declarations.html). If so install the types as `dependencies`. You can read [this](https://stackoverflow.com/questions/45176661/how-do-i-decide-whether-types-goes-into-dependencies-or-devdependencies) for more information.*

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

- [Deno](https://deno.land/) is a modern runtime for JavaScript and TypeScript that uses [V8](https://v8.dev) and is built in [Rust](https://www.rust-lang.org). Deno has "First-class" support for TS and its "Understand" (Using JIT) Typescript so you execute your `.ts` using `deno`.  

- [Bun](https://bun.sh) is a modern JavaScript runtime like Node or Deno. Bun uses the [JavaScriptCore](https://developer.apple.com/documentation/javascriptcore) engine and was written in [ZIG](https://ziglang.org). Bun is designed as a drop-in replacement for your current JavaScript & TypeScript apps or scripts so you can run `.ts` files directly.

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

### Working With TS - My Recommendations

- Write a little TS as you can! TS is very "smart" and most of the time inferred types will be more "specific". Also this will help your code readability.
  - Don't declare types in variables
  - Don't declare return types of simple functions
- Prefer `type` aliases over interfaces
- Don't use enums, prefer union types or const objects.
- Don't use `Function`, `Object`, `String`, `Number`, and `Boolean` (Capital letters)
- You can use  to avoid `any` in .json (in fetch) and JSON.parse both return any
- Be careful with `.json` (in `fetch`) and `JSON.parse` as they both return `any`. You can cast them to `unknown` (or use [ts-reset](https://github.com/total-typescript/ts-reset) to do it for you)

## Runtime checks with TypeScript

TypeScript is lived in "compile-time", which make its great for checking variables at the type level - against the developer, but in "runtime" there always be only JS - we need to test the user input against schema validation in JS.

A lot of the cases there is strong connections between the types and the runtime schema and we will not want to duplicate our types into schema and types.

### Zod

[Zod](https://github.com/colinhacks/zod) is a TypeScript-first schema declaration and validation library.

The goal is to eliminate duplicative type declarations. With Zod, you declare a validator once and Zod will automatically infer the static TypeScript type. It's easy to compose simpler types into complex data structures.

If you like to use Zod in [Fastify](https://www.fastify.io/) app, you can use [fastify-type-provider-zod](https://github.com/turkerdev/fastify-type-provider-zod) library.

#### Zod tutorial (optional)

You can do [this](https://www.totaltypescript.com/tutorials/zod) tutorial which is a set of zod exercises for you to work through.

### TypeBox (optional)

[TypeBox](https://github.com/sinclairzx81/typebox) is a JSON Schema Type Builder with Static Type Resolution for TypeScript.

With typebox you define your schema within your code and use them directly as types or schemas as you need them (like zod).

TypeBox is great for working with [Fastify in TS](https://www.fastify.io/docs/latest/Reference/TypeScript) because the validation in Fastify uses JSON Schema. Moreover, defining schemas for your Fastify can increase their throughput. To use it in your Fastify you will need [fastify type-provider](https://github.com/fastify/fastify-type-provider-typebox).

For more information you can read in the [Fastify typebox doc](https://www.fastify.io/docs/latest/Reference/TypeScript/#typebox).

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
