function testCase2() {
  let myArray = [];
  for (let i = 0; i < 100000; i++) {
    let number = RollDice();
    myArray.push(number);
    if (number > 6 || number < 1) {
      return false;
    }
  }
  let numberOfTwos = Math.ceil(
    (myArray.filter((x) => x == 2).length / myArray.length) * 100
  );
  let numberOfOnes = Math.ceil(
    (myArray.filter((x) => x == 1).length / myArray.length) * 100
  );
  let difference = Math.abs(numberOfTwos - numberOfOnes);
  if (difference < 3) {
    return true;
  } else {
    return false;
  }
}
