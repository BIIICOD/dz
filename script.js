const fib = (pos) => {
  let firstNumber = 0;
  let secondNumber = 1;
  let cashe = 0;

  for (let i = 0; i<pos; i++){
    cashe = firstNumber;
    firstNumber = firstNumber + secondNumber;
    secondNumber = cashe;
  }
  console.log(firstNumber);
}

fib(10);
