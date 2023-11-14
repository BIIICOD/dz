function isHappyNumber(number, stop = 10){
  let iter = 0;

  while (iter <= stop){
    number = sumOfSquareDigits(number);
    iter += 1;
  }

  number === 1 ? console.log(' Это счастливое число') : console.log(' Это не счастливое число');
}

function sumOfSquareDigits(nubmer){

  let sum = 0;

  while (nubmer != 0) {
    nubmer < 10 ? sum += nubmer ** 2 : sum += (nubmer % 10) ** 2;
    nubmer = Math.floor(nubmer / 10);
  }
  return(sum);
}

isHappyNumber(7);
