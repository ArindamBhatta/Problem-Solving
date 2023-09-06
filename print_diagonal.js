function PrintDiagonal(MatrixData){
  const row = MatrixData.length
  if (row === 0) return []
  const col = MatrixData[0].length

  let LeftDiagonal= [];
  let RightDiagonal =[];
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if(i===j){
        LeftDiagonal.push(MatrixData[i][j]);
      }
      if(i+j===MatrixData[0].length-1){
        RightDiagonal.push(MatrixData[i][j]);
      }
    }
  }
        console.log(LeftDiagonal);
        return  RightDiagonal;
}
  let MatrixData =[
    ['x', '0', '0'],
    ['0', 'x', '0'],
    ['0', '0', 'x']
  ];
  let LeftPrint = PrintDiagonal(MatrixData);
  console.log(LeftPrint);
  