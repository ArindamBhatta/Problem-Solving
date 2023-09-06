function ArrayShort(ArrayData) {
  for (i = 0; i < ArrayData.length - 1; i++) {
    for (j = i; j < ArrayData.length; j++) {
      if (ArrayData[i] > ArrayData[j]) {
        let Temp = ArrayData[i];
        ArrayData[i] = ArrayData[j];
        ArrayData[j] = Temp;
      }
    }
  }
  return ArrayData;
}

let ArrayData = [10, 9, 5, 7, 3, 2, 1, 4, 6, 8];
let Short = ArrayShort(ArrayData);
console.log(Short);
