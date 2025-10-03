// function check_equal(a, b, c) {
//   if (a === b && b === c) {
//     console.log("equal");
//   } else {
//     console.log("not equal");
//   }
// }
function checkEquality(...args) {
  if (args.length <= 1) return;

  const first = args[0];
  const allEqual = args.every((element) => element === first);

  console.log(allEqual ? "equal" : "not equal");
}
