let reverseInt = (numb) => {
  let strNubm = String(numb);
  let resNumb = '';
  for (let i = -1; i>(-strNubm.length)-1; i--){
    resNumb += strNubm.at(i);
  }
  strNubm < 0 ? console.log(Math.abs(parseInt(resNumb)) * -1) : console.log(Math.abs(parseInt(resNumb)));
}

reverseInt(4320000)
