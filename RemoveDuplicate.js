function removeDuplicate(ArrayElement) {
  let j = 0;
  let EmptyArray = [];
  EmptyArray[j] = ArrayElement[0];
  for (let i = 1; i < ArrayElement.length; i++) {
    if (EmptyArray[j] != ArrayElement[i]) {
      j++;
      EmptyArray[j] = ArrayElement[i];
    }
  }
  console.log(EmptyArray);
}

let ArrayElement = [2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9];
removeDuplicate(ArrayElement);
