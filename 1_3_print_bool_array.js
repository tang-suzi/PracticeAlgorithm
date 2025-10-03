const arr = [[true]];
function print_bool_array(arr) {
  if (!arr || !arr.length) {
    console.log("empty");
    return;
  }
  const rows = arr.length; // 行
  const cols = arr[0].length; // 列

  const rowWidth = Math.max(2, String(rows - 1).length);
  const colWidth = Math.max(2, String(cols - 1).length);

  let header = " ".repeat(rowWidth + 2);

  for (let c = 0; c < cols; c++) {
    header += `${c}`.padStart(colWidth).padEnd(colWidth + 1); // 以列号为开始字符，填充字符串
  }
  console.log(header);
  for (let r = 0; r < rows; r++) {
    let rowStr = `${r}`.padStart(rowWidth) + " "; // 以行号为开头填充字符串
    for (let c = 0; c < cols; c++) {
      rowStr += arr[r][c] ? "* ".padEnd(colWidth) : " ".repeat(colWidth);
    }
    console.log(rowStr);
  }
}

print_bool_array(arr);
