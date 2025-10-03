// let str = "";
// function BinaryString(num) {
//   const n = Math.floor(num / 2);
//   const s = num % 2;
//   str = String(s) + str;

//   if (n !== 0) {
//     BinaryString(n);
//   }
// }

// BinaryString(25);

function decimalToBinary(num) {
  if (num === 0) return "0";
  let binaryStr = "";
  while (num > 0) {
    binaryStr = (num % 2) + binaryStr; // 反转拼接顺序
    num = Math.floor(num / 2);
  }
  return binaryStr;
}

console.log(decimalToBinary(25)); // 输出 "11001"
