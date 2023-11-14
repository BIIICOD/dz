const isPerfect = (numb) => {

  let sum = 1;

  for (let i = 2; i < Math.sqrt(numb); i++){
    if (numb % i === 0){
      sum += i + numb/i;
    } 
  }
  
  numb === sum ? console.log('Чило идеальное') : console.log('Число не идеальное')

}

isPerfect(28);
