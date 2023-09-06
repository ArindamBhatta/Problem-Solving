function SubArray(ArrayElement) {
  let oldsum = 0;
  for (let i = 0; i < ArrayElement.length; i++) {
    let sum = 0;
    for (j = i; j < ArrayElement.length; j++) {
      sum = sum + ArrayElement[j];
    }
    if (sum > oldsum) {
      oldsum = sum;
    }
  }
  console.log(oldsum);
}

let ArrayElement = [1, 2, 3, -4, -5, -6, 7, 8, 9];

SubArray(ArrayElement);
