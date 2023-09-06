function findLeader(ArrayElement) {
  for (let i = 0; i < ArrayElement.length; i++) {
    let is_Leder = true;
    for (let j = i + 1; j < ArrayElement.length; j++) {
      if (ArrayElement[i] <= ArrayElement[j]) {
        is_Leder = false;
        break;
      }
    }
    if (is_Leder == true) {
      console.log(ArrayElement[i]);
    }
  }
}

let ArrayElement = [8, 11, 5, 11, 7, 6, 3];
findLeader(ArrayElement);

//[10   20  30] only 30 is leder;  [30  20  10] Every value is a leder;
