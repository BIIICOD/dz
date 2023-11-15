export default function cloneDeep(obj) {
    let clone = {};
    for (let prop in obj) {
      clone[prop] = obj[prop];
      if (typeof clone[prop] === "object") {
        cloneDeep(clone[prop]);
      }
    }
    return clone;
  }
  