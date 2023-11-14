import { sum1, sqrt1 } from "./numbers1";
import { pow2, multi2 } from "./numbers2";
import { sub3 } from "./numbers3";

let cube = () => {
  console.log("cube");
};

export {
  sum1 as sum,
  sqrt1 as sqrt,
  pow2 as pow,
  multi2 as multi,
  sub3 as sub
};

export default cube;
