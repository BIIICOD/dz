let fizzBuzz = (start, end) => {

  if (start > end) return console.log('Диапазон не верный')

  for (let i = start; i < end+1; i++){
    if (i % 3 === 0 && i % 5 === 0) console.log('FizzBuzz')
    else if (i % 5 === 0) console.log('Buzz')
    else if (i % 3 === 0) console.log('Fizz')
    else console.log(i);
  }

}

fizzBuzz(11, 20);
