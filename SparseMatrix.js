function SparceMatrix(Matrixdata) {
  let row = Matrixdata.length;
  let col = Matrixdata[0].length;
  let count = 0,
    other = 0;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (Matrixdata[i][j] == 0) {
        count++;
      } else {
        other++;
      }
    }
  }
  if (count > other) {
    console.log("Matrix is a sparce Matrix");
  } else {
    console.log("Not a Sparce Matrix");
  }
}

let Matrixdata = [
  [0, 0, 0],
  [1, 1, 1],
  [0, 1, 0],
];

SparceMatrix(Matrixdata);
