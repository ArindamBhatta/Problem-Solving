function TwomaxNo(ArrayElement) {
  let maxNo = ArrayElement[0],
    maxNo2 = ArrayElement[0];

  for (let i = 1; i < ArrayElement.length; i++) {
    if (maxNo < ArrayElement[i]) {
      maxNo = ArrayElement[i];
    } else if (ArrayElement[i] > maxNo2) {
      maxNo2 = ArrayElement[i];
      console.log(maxNo2);
    }
  }
  return [maxNo, maxNo2];
}

let ArrayElement = [10, 50, 20, 40, 30];

console.log(TwomaxNo(ArrayElement));
