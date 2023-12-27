# Typescript

> _Estimation time: 1-2 Days_

---

TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.

This is a basic introduction to Typescript.

**_Learning objectives:_**

At the end of this learning path, you'll be able to:

- Create a new TS project
- Run TS project
- Write an efficient type-safe code in TypeScript

---

_Send me back [home](home)_

[[_TOC_]]

---

**Learning note**: all links in this path are reading tutorials. You can read them but you can watch a youtube crash course. if you find useful links, please share them with me.

Here is some examples links:

- [Typescript](https://www.typescriptlang.org/) official website
- [Typescript handbook](https://www.typescriptlang.org/docs/handbook/index.html)
- [No BS TS](https://www.youtube.com/playlist?list=PLNqp92_EXZBJYFrpEzdO2EapvU0GOJ09n) Youtube Crash Course
- [Total typescript](https://www.totaltypescript.com/) interactive course
- [Type Challenges Repo](https://github.com/type-challenges/type-challenges) - A collection of TypeScript type challenges

## Get Started with typescript

You can start "playing" with typescript online in [sandbox](https://www.typescriptlang.org/play).

In order to run it locally we need to install typescript and then compile our code into executable javascript.

### Install

TypeScript is available as a [package](https://www.npmjs.com/package/typescript) on the npm registry.

You can install it as dev-dependency in your project using:

```bash
npm install typescript --save-dev
```

if you want typescript support in `node:` imports and global node variables you need to install [`@types/node`](https://www.npmjs.com/package/@types/node)

```bash
npm install @types/node --save-dev
```

_Side Note: Sometimes You will need types in the [declaration file](https://www.typescriptlang.org/docs/handbook/2/type-declarations.html). If so install the types as `dependencies`. You can read [this](https://stackoverflow.com/questions/45176661/how-do-i-decide-whether-types-goes-into-dependencies-or-devdependencies) for more information._

### TSConfig

Typescript compiler needs instructions to compile. We can specify the compiler options in config file called [`tsconfig`](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html).

You can initialize the compiler options using `tsc` cli `--init` flag:

```bash
npx tsc --init
```

This will create a basic `tsconfig.json` file.

My recommended `tsconfig.json` for modern node applications is:

`compilerOptions`:

- `"lib": ["es2022"],` - Tells TS that it's okay to use functions and properties introduced in ES2022 or earlier. `"ESNext"` is the next version of JavaScript, and we use it instead of specifying each version.

- `"module": "es2022"` - Tells TS that this project use ES Modules

- `"moduleResolution": "node"` - Tells TS that we are using Node.js's rules for resolving modules

- `target": "ES2022"` - Tells TS that it's okay to output JavaScript syntax with features from ES2022 instead of embedding a polyfill.

- `"strict": true` - Tells TS to enables a wide range of type checking behavior that results in stronger guarantees of program correctness.

- `"noUncheckedIndexedAccess": true` - Tells TS to add `undefined` to any declared via index signatures field in the type.

- `skipLibCheck": true` - Tells TS to skip type checking of all declaration files (\*.d.ts). This can save time during compilation and solve incompatibly issues between libraries.

Here is the complete recommended `compilerOptions` in `tsconfig.json` file:

```json
{
  "target": "ESNext",
  "module": "ESNext",
  "moduleResolution": "node",
  "outDir": "./dist",
  "rootDir": "./src",
  "strict": true,
  "noUncheckedIndexedAccess": true,
  "esModuleInterop": true,
  "skipLibCheck": true
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

Install it as a devDependency:

```bash
npm i -D ts-node
```

And then run your file:

```bash
npx node-ts <your-file>.ts
```

You can add it to your npm scripts:

```json
"dev": "ts-node <your-file>.ts"
```

If you like to use [esm](https://nodejs.org/api/esm.html) (and you should) you can use it as a [loader](https://nodejs.org/api/esm.html#loaders) to your file:

```json
"dev": "node --experimental-loader ts-node/esm <your-file>.ts"
```

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
- Parameter Destructuring in functions
- Passing Type Arguments (`<Type>`)
- Type Assertions (`as`, `!`)
- `typeof` type operator
- `keyof` type operator
- `null`, `undefined`, `void`, and `never`
- Narrowing and Type guards
- Global utility Types (e.g `Omit`, `Record`, `Promise`, etc.)

### Beginners Typescript Workshops

[Here](https://github.com/total-typescript/beginners-typescript-tutorial) is a great tutorial for all the basics. Do it yourself :smile:

### Questions - Basic Typescript

1. - Consider this types declaration, What is the error? Why?

   ```ts
   type AppResponse = {
     data: {};
     headers: {};
     status: number;
     statusText: string;
   };

   type AppError = {
     message: string;
     stack: string;
   };

   type ErrorResponse = AppResponse | AppError;

   declare function badRequest(): ErrorResponse;

   const response = badRequest();
   console.error(
     `Error in request: ${response.message}, status: ${response.status}`
   );
   ```

   - Fix the error so it will compile. (Hint: The `ErrorResponse` type is not correct)

1. I have the following code:

   ```ts
   const echo = (arg) => arg;

   const myStr = echo("Hello From World");
   const veryStr = myString.map((ch) => ch + "!");
   console.log(veryStr);
   ```

   - What is the problem?
   - How typescript can help me?
   - Fix the code so it will **not** compile

### Working With TS - My Recommendations

- Write a little TS as you can! TS is very "smart" and most of the time inferred types will be more "specific". Also this will help your code readability.
  - Don't declare types in variables
  - Prefer to not declare return types of _simple_ functions
- Don't use enums, prefer union types or `as const` objects.
- Don't use `Function`, `Object`, `String`, `Number`, and `Boolean` (Capital letters) and `object` - they are not doing what you think they are doing.
- Be careful with `.json()` (in `fetch` response) and `JSON.parse()` as they both return `any`. You can cast them to `unknown` (or use [ts-reset](https://github.com/total-typescript/ts-reset) to do it for you)
- I Prefer `type` aliases over interfaces for "everyday" types. If you using Object Oriented Programming you can use interfaces but keep in mind the merge behavior of interfaces.

## Runtime checks with TypeScript

TypeScript is lived in "compile-time", which make its great for checking variables at the type level (developer "linting").
However, during "runtime", JavaScript is the only language that is executed.
Therefore, it is necessary to validate user input against schema validation in JavaScript.

In many cases there is a strong corelation between types and runtime schemas, and duplicating type declarations in both schema and types can be cumbersome.

### Zod

[Zod](https://github.com/colinhacks/zod) is a TypeScript-first schema declaration and validation library.

The goal is to eliminate duplicate type declarations. With Zod, you declare a validator once and Zod will automatically infer the static TypeScript type.
It also allows for easy composition of simpler types into complex data structures.

If you wish to use Zod with [Fastify](https://www.fastify.io/) app, you can use [fastify-type-provider-zod](https://github.com/turkerdev/fastify-type-provider-zod) library.

#### Zod tutorial (optional)

You can do [this](https://www.totaltypescript.com/tutorials/zod) tutorial which is a set of zod exercises for you to work through.

### TypeBox (optional)

[TypeBox](https://github.com/sinclairzx81/typebox) is a JSON Schema Type Builder with Static Type Resolution for TypeScript.

With typebox you define your schema within your code and use them directly as types or schemas as you need them (like zod).

TypeBox is great for working with [Fastify in TS](https://www.fastify.io/docs/latest/Reference/TypeScript) because the validation in Fastify uses JSON Schema. Moreover, defining schemas for your Fastify can increase their throughput. To use it in your Fastify you will need [fastify type-provider](https://github.com/fastify/fastify-type-provider-typebox).

For more information you can read in the [Fastify typebox doc](https://www.fastify.io/docs/latest/Reference/TypeScript/#typebox).

## TypeScript - More Topics (optional)

- Enums
- Generics
- Literal Types and `as const`
- Indexed Access Types (such as `T["key"]`, `T[string]` etc.)
- Index Signatures (such as `[index: string]: number`)
- `extends` keyword

### Questions - More Topics

1. Fix the code so it will Error only in `errVeryStr`

   ```ts
   const echo = (arg) => arg;

   const myStr = echo("Hello From Space");
   const myStrAsArr = echo(myStr.split(""));

   // @ts-expect-error
   const errVeryStr = myStr.map((ch) => ch + "!");
   const veryStr = myStrAsArr.map((ch) => ch + "!").join("");

   console.log(veryStr);
   ```

1. Fix the code so `addFullName` function will get any object in the shape of `UserShape`:

   ```ts
   type UserShape = {
     firstName: string;
     lastName: string;
   };

   const addFullName = (user: UserShape) => {
     return {
       ...user,
       fullName: `${user.firstName} ${user.lastName}`,
     };
   };

   const actorUser = {
     firstName: "John",
     lastName: "Malkovich",
     hobbies: ["acting", "directing"],
   };

   const actressUser = {
     firstName: "Cameron",
     lastName: "Diaz",
     role: "Mary",
   };

   const actor = addFullName(actorUser);
   const actress = addFullName(actressUser);

   console.log(actress.fullName);
   console.log(actress.role);

   console.log(actor.fullName);
   console.log(actor.hobbies);

   // @ts-expect-error
   console.log(actor.notExistingProperty);
   ```

1. What is the problem with this code? Can you fix it?

   ```ts
   const satellitesCompanies = {
     skysat: "Planet",
     worldview: "Maxar",
     sentinel: "Sentinel",
   };

   type SatellitesCompanies = typeof satellitesCompanies;

   type SkysatCompany = SatellitesCompanies["skysat"];
   type WorldviewCompany = SatellitesCompanies["worldview"];
   type SentinelCompany = SatellitesCompanies["sentinel"];

   declare function freeOrder(company: SentinelCompany): void;
   declare function payedOrder(company: SkysatCompany | WorldviewCompany): void;

   freeOrder("Sentinel");

   // @ts-expect-error
   freeOrder("Planet");

   // @ts-expect-error
   payedOrder("Sentinel");
   ```

1. Change the `SatelliteName` type so it will error on the last line:

   ```ts
   const satellitesNames = [
     "skysat",
     "skywalker",
     "skyscraper",
     "skyrim",
     "skype",
   ] as const;

   type SatelliteName = string;

   declare function isSatelliteGood(satName: SatelliteName): boolean;

   console.log(isSatelliteGood("skywalker"));

   // @ts-expect-error
   console.log(isSatelliteGood("skySat"));
   ```

1. Change the `SatellitesCompaniesNames` type so it will error on the last line:

   ```ts
   const satellitesCompanies = {
     skysat: "Planet",
     worldview: "Maxar",
     sentinel: "Sentinel",
   };

   type SatellitesCompaniesNames = string;

   declare function isCompanyGood(company: SatellitesCompaniesNames): boolean;

   console.log(isCompanyGood("Planet"));

   // @ts-expect-error
   console.log(isCompanyGood("planet"));
   ```

## TypeScript - Advanced (optional)

> **_Note:_** This section is advanced, you can ask your mentor what to learn from this section.

- type predicates (`is`)
- Recursive Types
- Discriminated unions
- Exhaustiveness checking
- Function Overloads
- `infer` keyword
- `satisfies` operator
- Conditional Types
- Distributive Conditional Types (`T extends T` vs `[T] extends [T]`)
- Mapped Types (`in`)
- Template Literal Types
- `using` operator
- Decorators

### Questions - Advanced

1.  - Create a type "function" which generate tuple types. For Example:

      ```ts
      type TupleStr = Tuple<string, 3>;
      // TupleStr = [string, string, string]

      type Tuple2 = Tuple<number>;
      // Tuple2 = [number, number]
      ```

    - Fix the Tuple implementation so it will work with distribute over union types:

      ```ts
      type Res = Tuple<string | number, 3>;
      // Res = [string, string, string] | [number, number, number]
      type Res2 = Tuple<number, 2 | 3>;
      // Res2 = [number, number] | [number, number, number]
      ```

## Project

Talk with your mentor about the project.

## Worth knowing (optional)

These concepts are worth mentioning but don't learn them now.

- Declaration Files
- Mixins
- Module Resolution

## Further Reading (optional)

- [TypeScript and Set Theory](https://ivov.dev/notes/typescript-and-set-theory)

## Tools

- [pretty-ts-errors](https://github.com/yoavbls/pretty-ts-errors)
- [ts-reset](https://github.com/total-typescript/ts-reset)
- [tsup](https://tsup.egoist.dev/) - Bundle your TypeScript library with no config, powered by [esbuild](https://github.com/evanw/esbuild).
- [papr](https://plexinc.github.io/papr/#/) - lightweight library built around the MongoDB NodeJS driver, written in TypeScript
