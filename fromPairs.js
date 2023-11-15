export default function fromPairs(query) {
  let obj = {};

  for (let [key, value] of query) {
    obj[key] = value;
  }
  console.log(obj);
}
