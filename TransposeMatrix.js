function reverse(MatrixData) {
  const row = MatrixData.length;
  const col = MatrixData[0].length;
  let myArray = new Array(3).fill(0).map(() => new Array(3).fill(0));
  for (let j = 0; j < col; j++) {
    for (let i = 0; i < row; i++) {
      // console.log(MatrixData[i][j]);
      myArray[j][i] = MatrixData[i][j];
      // console.log(myArray[j][i]);
    }
  }

  console.log(myArray);
}
let MatrixData = [
  ["1", "2", "3"],
  ["4", "5", "6"],
  ["7", "8", "9"],
  ["10", "11", "12"],
];
reverse(MatrixData);
