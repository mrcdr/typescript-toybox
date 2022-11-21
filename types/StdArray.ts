import { Length, Cons } from "./utils"

/* Equivalent to std::array<T, N> in C++ */
type StdArray<T, N extends number, A extends any[] = []> =
  Length<A> extends N ? A : StdArray<T, N, Cons<T, A>>

export {
  StdArray
}
