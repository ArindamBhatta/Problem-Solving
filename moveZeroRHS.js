function moveZero(ArrayElement) {
  let Size = ArrayElement.length;
  if (Size == 0 || Size == 1) {
    return "Array is a single Intiger";
  }
  let NonZero = 0;
  let Zero = 0;
  while (NonZero < Size) {
    if (ArrayElement[NonZero] != 0) {
      let temp = ArrayElement[NonZero];
      ArrayElement[NonZero] = ArrayElement[Zero];
      ArrayElement[Zero] = temp;
      NonZero++;
      Zero++;
    } else {
      NonZero++;
    }
  }
  return ArrayElement;
}
let ArrayElement = [1, 0, 2, 0, 3, 0, 4, 0, 5];
let Shorted = moveZero(ArrayElement);
console.log(Shorted);
