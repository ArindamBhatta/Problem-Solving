function SpiralMatrix(MatrixData, MaxLevel) {
  let row = MatrixData.length;
  let column = MatrixData[0].length;
  let level = 0;
  let direction = "right";
  for (let i = 0; i < row; ) {
    for (let j = 0; j < column; ) {
      console.log(MatrixData[i][j]);

      if (j == column - level - 1 && direction == "right") {
        direction = "down";
      } else if (
        i == row - level - 1 &&
        j == column - level - 1 &&
        direction == "down"
      ) {
        direction = "left";
      } else if (i == row - level - 1 && j == level && direction == "left") {
        direction = "top";
        level++;
      } else if (j == level - 1 && i == level && direction == "top") {
        direction = "right";
      }

      if (direction == "right") {
        j++;
      } else if (direction == "down") {
        i++;
      } else if (direction == "left") {
        j--;
      } else if (direction == "top") {
        i--;
      }

      if (level <= i && i <= row - level - 1) {
      } else {
        return;
      }
    }
  }
}
let MaxLevel = function () {
  let celingVal = Math.ceil(MatrixData.length / 2);
  return celingVal;
};

let MatrixData = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25],
];
console.log(SpiralMatrix(MatrixData, MaxLevel()));
