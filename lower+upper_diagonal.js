function loweDiagonal(MatrixData) {
  let row = MatrixData.length;
  let column = MatrixData[0].length;
  const newArray = [];
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      if (i > j) {
        newArray.push(MatrixData[i][j]);
      }
    }
  }
  return newArray;
}

let MatrixData = [
  ["A", "b", "c"],
  ["0", "b", "c"],
  ["0", "0", "c"],
];

let lowerTriangle = loweDiagonal(MatrixData);
console.log(lowerTriangle);
