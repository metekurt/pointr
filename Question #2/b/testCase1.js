function testCase1() {
  let defaultNumbers = new Set([1, 2, 3, 4, 5, 6]);
  let mySet = new Set();
  let count = 0;
  do {
    let number = RollDice();
    mySet.add(number);
    count++;
  } while (mySet.size < 6);
  const difference = new Set([...mySet].filter((x) => !defaultNumbers.has(x)));
  if (difference.size == 0 && count != mySet.size) {
    return true;
  } else {
    return false;
  }
}
