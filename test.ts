type Tuple<T, N extends number> = T extends T
  ? N extends N
    ? number extends N
      ? T[]
      : _TupleOf<T, N, []>
    : never
  : never;

type _TupleOf<T, N extends number, R extends unknown[]> = R["length"] extends N
  ? R
  : _TupleOf<T, N, [T, ...R]>;

type Res = Tuple<string | number, 3>;
// Res = [string, string, string] | [number, number, number]
type Res2 = Tuple<number, 2 | 3>;
// Res2 = [number, number] | [number, number, number]

type Unshift<T> = T extends [infer K, ...infer U] ? U : unknown
type Head<T> = T extends [infer K, ...infer U] ? K : unknown

type test = Head<[1, 2, 3]> // [2, 3]
type Curried<T, R> = T extends Array<any>
  ? T['length'] extends 1
    ? (args: Head<T>) => R
    : (args: Head<T>) => Curried<Unshift<T>, R>
  : never

declare function Currying<T extends unknown[], R>(fn: (...args: T) => R): Curried<T, R>

const add = (a: number, b: number) => a + b
const three = add(1, 2)

const curriedAdd = Currying(add)
const five = curriedAdd(2)(3)