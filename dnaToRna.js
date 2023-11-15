// export default function dnaToRna(dna) {
//   let rna = "";
//   for (let i = 0; i < dna.length; i++) {
//     //console.log(dna.at(i) === "G");
//     switch (dna.at(i)) {
//       case "G":
//         rna += "C";
//         break;
//       case "C":
//         rna += "G";
//         break;
//       case "T":
//         rna += "A";
//         break;
//       case "A":
//         rna += "U";
//         break;
//       case "":
//         return console.log("");
//       default:
//         return console.log("null");
//     }
//   }
//   console.log(rna);
// }

export default function dnaToRna(dna) {
  let symb = {
    C: "G",
    G: "C",
    A: "U",
    T: "A"
  };

  let rna = "";

  if (dna === "") return console.log("");

  for (const iter of dna) {
    if (symb[iter] === undefined) return console.log("null");
    else rna += symb[iter];
  }
  console.log(rna);
}


