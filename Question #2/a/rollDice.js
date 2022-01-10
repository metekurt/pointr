function RollDice() {
  var hrTime = process.hrtime();
  return ((hrTime[0] * 1000000000 + hrTime[1]) % 6) + 1;
}
