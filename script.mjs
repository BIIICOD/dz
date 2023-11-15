import cloneDeep from '../objects.js';

const data = {
  key: 'value',
  key2: {
    key: 'innerValue',
    innerKey: {
      anotherKey: 'anotherValue',
    },
  },
};

// result имеет такую же структуру, как и data
const result = cloneDeep(data);

console.log(result);
// let div = document.querySelector('.output').innerHTML = 'asdsad';

// Но внутри другие объекты
result.key2 !== data.key2; // true
result.key2.innerKey !== data.key2.innerKey; // true

