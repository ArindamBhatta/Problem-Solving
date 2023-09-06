function ZigZag(ArrayElement) {
  let Row = ArrayElement.length;
  let col = ArrayElement[0].length;
  for (let i = 0; i < Row; i++) {
    if (i % 2 == 0) {
      for (let j = 0; j < col; j++) {
        console.log(ArrayElement[i][j]);
      }
    } else {
      for (let j = col - 1; j >= 0; j--) {
        console.log(ArrayElement[i][j]);
      }
    }
  }
}

let ArrayElement = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

ZigZag(ArrayElement);
