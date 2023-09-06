function removeDuplicate(Arr) {
  let rd = 0;
  for (let i = 1; i < Arr.length; i++) {
    if (Arr[rd] != Arr[i]) {
      rd++;
      Arr[rd] = Arr[i];
    }
  }

  return rd + 1;
}
let Arr = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5]; //Call by reference;
let RD = removeDuplicate(Arr);
for (let i = 0; i < RD; i++) {
  console.log(Arr[i]);
}
