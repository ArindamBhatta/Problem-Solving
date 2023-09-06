function findMax(ArrayElement) {
  let MaxNo = ArrayElement[0];
  for (let i = 0; i < ArrayElement.length; i++) {
    if (MaxNo < ArrayElement[i]) {
      MaxNo = ArrayElement[i];
    }
  }
  return MaxNo;
}
let ArrayElement = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let MaxNumber = findMax(ArrayElement);
console.log(MaxNumber);
