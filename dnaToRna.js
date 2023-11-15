export default function dnaToRna(dna) {
  let rna = "";
  for (let i = 0; i < dna.length; i++) {
    //console.log(dna.at(i) === "G");
    switch (dna.at(i)) {
      case "G":
        rna += "C";
        break;
      case "C":
        rna += "G";
        break;
      case "T":
        rna += "A";
        break;
      case "A":
        rna += "U";
        break;
      case "":
        return console.log("");
      default:
        return console.log("null");
    }
  }
  console.log(rna);
}

