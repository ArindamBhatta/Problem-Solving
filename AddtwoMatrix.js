function Addition(Matrix1, Matrix2){
   let addArray = [];
   for(let i = 0; i<Matrix1.length; i++){
    for(let j=0; j<Matrix1.length; j++){
        if(Matrix1.length===Matrix2.length && Matrix1[0].length===Matrix2[0].length){
        addArray.push(Matrix1[i][j] + Matrix2[i][j]);
        }else{
        return [];
        }
      }
    }
    return addArray;
}

let Matrix1 =[
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let Matrix2 =[
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(Addition(Matrix1,Matrix2));

