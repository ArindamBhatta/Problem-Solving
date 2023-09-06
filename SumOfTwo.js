function closeTo(ArrayElement) {
  let MinNo = Number.MAX_SAFE_INTEGER;
  let minIdx1, minIdx2;
  for (let i = 0; i < ArrayElement.length; i++) {
    let sum = 0;
    for (let j = 0; j < ArrayElement.length; j++) {
      sum = ArrayElement[i] + ArrayElement[j];
      if (
        sum == 0 ||
        sum == 1 ||
        sum == 2 ||
        sum == 3 ||
        sum == 4 ||
        sum == 5 ||
        sum == 6 ||
        sum == 7 ||
        sum == 8 ||
        sum == 9
      ) {
        MinNo = sum;
        minIdx1 = i;
        minIdx2 = j;
        break;
      } else {
        console.log("Distance More Than Single Digit");
      }
    }
    console.log(MinNo, minIdx1, minIdx2);
    break;
  }
}

let ArrayElement = [2, -4, 6, -12, -2, 10, -4];
closeTo(ArrayElement);
