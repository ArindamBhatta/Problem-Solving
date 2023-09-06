function SubArray(ArrayElement) {
  for (let i = 0; i < ArrayElement.length; i++) {
    for (let j = i; j < ArrayElement.length; j++) {
      for (let k = i; k <= j; k++) {
        console.log(ArrayElement[k]);
      }
      console.log("\n");
    }
  }
}
let ArrayElement = [1, 2, 3, 4, 5, 6];
SubArray(ArrayElement);
