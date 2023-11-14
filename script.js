function invertCase(text){
  let newString = '';
  for (let symb of text){
    symb.toLowerCase() === symb ? newString += symb.toUpperCase() : newString += symb.toLowerCase();
  }
  console.log(newString);
}

invertCase("Hello World");
