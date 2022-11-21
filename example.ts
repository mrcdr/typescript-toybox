import { StdArray } from "./types/StdArray";
import { Add, Multiply } from "./types/arithmetic"

const array5: StdArray<number, 5> = [1, 2, 3, 4, 5]


const seven: Add<2, 5> = 7

const eight: Multiply<2, 4> = 8
