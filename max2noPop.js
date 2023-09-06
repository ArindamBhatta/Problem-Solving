function findMax(ArrayElement) {
  let Max = ArrayElement[0];
  for (let i = 0; i < ArrayElement.length; i++) {
    if (Max < ArrayElement[i]) {
      Max = ArrayElement[i];
    }
  }
  console.log(Max);
  ArrayElement.pop(Max);
  function findMax2() {
    let max2 = ArrayElement[0];
    for (let i = 0; i < ArrayElement.length; i++) {
      if (max2 < ArrayElement[i]) {
        max2 = ArrayElement[i];
      }
    }
    console.log(max2);
  }
  findMax2();
}
let ArrayElement = [1, 2, 8, 6, 8, 9];

findMax(ArrayElement);
