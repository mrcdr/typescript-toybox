import { Length, Cons } from "./utils"

type Box<N extends number, A extends any[] = []> =
  A['length'] extends N ? A : Box<N, Cons<1, A>>

type Unbox<A extends any[]> = Length<A>

type Add<M extends number, N extends number> =
  Unbox<[...Box<M>, ...Box<N>]>;

type Multiply<M extends number, N extends number> = Unbox<Multiplier<M, N>>

type Multiplier<M extends number,
                N extends number,
                C extends any[] = [],
                A extends any[] = []> =
  Length<C> extends N ? A : Multiplier<M, N, [...C, 1], [...Box<M>, ...A]>


export {
  Add,
  Multiply
};
