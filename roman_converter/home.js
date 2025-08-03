// document.getElementById("convert-btn").addEventListener('click',function(){
//   let number=document.getElementById("number").value;
//   let output=document.getElementById("output");
//   number = parseInt(number);
//   if(isNaN(number)){
//     output.innerText="Please enter a valid number";
//     return;
//   }
//   if(number<1){
//     output.innerText="Please enter a number greater than or equal to 1";
//     return;
//   }
//   if(number>=4000){
//     output.innerText="Please enter a number less than or equal to 3999";
//     return;
//   }
//   output.innerText= romancalc(number);
// });

// function romancalc(num) {
//   let roman = "";
//   const romanNum = [
//     { value: 1000, numeral: "M" },
//     { value: 900, numeral: "CM" },
//     { value: 500, numeral: "D" },
//     { value: 400, numeral: "CD" },
//     { value: 100, numeral: "C" },
//     { value: 90, numeral: "XC" },
//     { value: 50, numeral: "L" },
//     { value: 40, numeral: "XL" },
//     { value: 10, numeral: "X" },
//     { value: 9, numeral: "IX" },
//     { value: 5, numeral: "V" },
//     { value: 4, numeral: "IV" },
//     { value: 1, numeral: "I" }
//   ];

//   for (let i = 0; i < romanNum.length; i++) {
//     while (num >= romanNum[i].value) {
//       roman += romanNum[i].numeral;
//       num -= romanNum[i].value;
//     }
//   }

//   return roman;
// }

document.getElementById("convert-btn").addEventListener("click", function () {
  const number = parseInt(document.getElementById("number").value);
  const output = document.getElementById("roman-result");
  const outputBox = document.getElementById("output");

  if (isNaN(number) || number < 1) {
    output.textContent = "⚠ Enter a number ≥ 1";
    outputBox.classList.remove("hidden");
    return;
  }

  output.textContent = convertToRomanExtended(number);
  outputBox.classList.remove("hidden");
});

function overline(str) {
  const overlineChar = "\u0305";
  return [...str].map(char => char + overlineChar).join("");
}

function convertToRomanExtended(num) {
  const extendedNumerals = [
    { value: 1000000, numeral: overline("M") },
    { value: 900000, numeral: overline("C") + overline("M") },
    { value: 500000, numeral: overline("D") },
    { value: 400000, numeral: overline("C") + overline("D") },
    { value: 100000, numeral: overline("C") },
    { value: 90000, numeral: overline("X") + overline("C") },
    { value: 50000, numeral: overline("L") },
    { value: 40000, numeral: overline("X") + overline("L") },
    { value: 10000, numeral: overline("X") },
    { value: 9000, numeral: overline("I") + overline("X") },
    { value: 5000, numeral: overline("V") },
    { value: 4000, numeral: overline("I") + overline("V") },
    { value: 1000, numeral: "M" },
    { value: 900, numeral: "CM" },
    { value: 500, numeral: "D" },
    { value: 400, numeral: "CD" },
    { value: 100, numeral: "C" },
    { value: 90, numeral: "XC" },
    { value: 50, numeral: "L" },
    { value: 40, numeral: "XL" },
    { value: 10, numeral: "X" },
    { value: 9, numeral: "IX" },
    { value: 5, numeral: "V" },
    { value: 4, numeral: "IV" },
    { value: 1, numeral: "I" }
  ];

  let roman = "";
  for (let i = 0; i < extendedNumerals.length; i++) {
    while (num >= extendedNumerals[i].value) {
      roman += extendedNumerals[i].numeral;
      num -= extendedNumerals[i].value;
    }
  }
  return roman;
}
