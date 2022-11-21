type Length<T extends any[]> = T['length'];

type Cons<E, T extends any[]> = [E, ...T];

export {
  Length,
  Cons
}