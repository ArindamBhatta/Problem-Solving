function findleader(ArrayElement) {
  let currentLeader = ArrayElement[ArrayElement.length - 1];
  for (let i = ArrayElement.length - 2; i >= 0; i--) {
    if (ArrayElement[i] > currentLeader) {
      console.log(currentLeader); //This Will print privious current leader before changed
      currentLeader = ArrayElement[i];
    }
  }
  console.log(currentLeader); //This is final Result
}
let ArrayElement = [8, 11, 5, 11, 7, 6, 3];
findleader(ArrayElement);
