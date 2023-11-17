
export default function toRoman(arabicNumber) {
  let str = "";
  let test = Number(arabicNumber);

  let arabic = {
    oneTwoThree(nubm) {
      str += "I".repeat(nubm);
      return str;
    },
    lessFive(nubm) {
      nubm < 5 ? (str += "IV") : (str += "V");
      return str;
    },
    isTen(nubm) {
      str += "X".repeat(nubm);
      return str;
    },
    isHundred(numb) {
      str += "C".repeat(numb);
    }
  };

  console.log();

  for (let i = 0; i < arabicNumber.length; i++) {
    if (
      Math.trunc(test / 100) * 100 >= 100 &&
      Math.trunc(test / 100) * 100 <= 300
    ) {
      arabic.isHundred(arabicNumber[i]);
      test -= arabicNumber[i] * 100;
    } else if (test >= 10 && test <= 50) {
      arabic.isTen(arabicNumber[i]);
      test -= arabicNumber[i] * 10;
    } else if (arabicNumber[i] <= 3) {
      arabic.oneTwoThree(Number(arabicNumber[i]));
    } else if (arabicNumber[i] > 3 && arabicNumber[i] <= 5) {
      arabic.lessFive(Number(arabicNumber[i]));
    }
  }

  console.log(str);
}
