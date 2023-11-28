Array.prototype.myMap = function (callback, arg) {
    if (this == null || this === window) {
      throw TypeError('myMap called on null or undefined')
    }
    if (typeof callback !== 'function') {
      throw TypeError(`{callback} is not a function`)
    }
    const newArray = [];
    for (let i = 0; i < this.length; i++) {
      newArray[i] = callback.call(arg, this[i], i, this)
    }
    return newArray;
  };

let arrMyMap = [1, 2, 3, 4, 5];

arrMyMap.myMap((val, index) => {
  arrMyMap[index] = val * 3;
});

console.log(arrMyMap);


Array.prototype.myReduce = function (callback, initValue) {
  if (this === null || this === window)
    throw TypeError('myReduce called on null or undefined');
 
  if (typeof callback !== 'function')
    throw TypeError(`${callback} is not a function`);
 
  let previousValue = initValue;
  let startIndex = 0;
 
  if (initValue === null) {
    previousValue = this[0];
    startIndex = 1;
  }
 
  if (previousValue == null)
    throw TypeError('Reduce of empty array with no initial value');
 
  for (let index = startIndex; index < this.length; index++) {
    previousValue = callback(previousValue, this[index], index, this);
  }
 
  return previousValue;
};


let objMyReduce = arrMyMap.myReduce((newObj, val, index) => {
  newObj[index] = val;
  return newObj;
}, {})

console.log(objMyReduce);



Array.prototype.myFilter = function (callback, arg) {
  if (this == null || this === window)
    throw TypeError('myfilter called on null or undefined');
 
  if (typeof callback !== 'function')
    throw TypeError(`${callback} is not a function`);
 
  const newArr = [];
  for (let i = 0; i < this.length; i++) {
     if (callback.call(arg, this[i], i, this)) newArr.push(this[i]);
  }
 
  return newArr;
};


const myResult = arrMyMap.myFilter((val, index) => {
  return index > arrMyMap.length / 2; 
})

console.log(myResult);
