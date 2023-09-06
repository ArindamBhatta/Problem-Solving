function findElement(ArrayElement) {
  let sum = 0;
  var N;
  for (let i = 0; i < ArrayElement.length; i++) {
    sum = sum + ArrayElement[i];
  }
  for (let i = ArrayElement.length; i >= ArrayElement.length - 1; i--) {
    N = ArrayElement[i];
  }
  let Total = (N / 2) * (N + 1);
  let MissingNo = Total - sum;
  console.log(MissingNo);
}
let ArrayElement = [1, 2, 3, 5];
findElement(ArrayElement);
