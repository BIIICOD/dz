function isLuckyNumber(number){

  let leftSide = 0, rightSide = 0;

  if (number.length % 2 === 0){

    for (let i = 0; i<number.length/2; i++){
      leftSide += Number(number[i]);
    }

    for (let i = number.length/2; i<number.length; i++){
      rightSide += Number(number[i]);
    }

    if (leftSide === rightSide){
      console.log (number + ' Is lucky number');
    }
    else console.log (number + ' Is not lucky number');
  }
  else console.log('Number not % 2 = 0')
}

isLuckyNumber('385916');
