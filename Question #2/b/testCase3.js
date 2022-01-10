function testCase3() {
  let myArray = [];

  for (let i = 0; i < 100000; i++) {
    let number = RollDice();
    if (number > 6 || number < 1) {
      return false;
    } else {
      myArray.push(number);
    }
  }

  for (let i = 1; i <= 6; i++) {
    let rate = Math.ceil(
      (myArray.filter((x) => x == i).length / myArray.length) * 100
    );
    if (rate > 30 || rate < 10) {
      return false;
    }
  }
  return true;
}
