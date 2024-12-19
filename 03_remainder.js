function remainder(dividend, divisor) {
  if (dividend < 0) {
    return dividend + divisor;
  }

  return remainder(dividend - divisor, divisor);
}

function testRemainder(dividend, divisor, expected) {
  const result = remainder(dividend, divisor);
  const inputSegment1 = "dividend :" + dividend;
  const inputSegment2 = "divisor :" + divisor;
  const expectedSegment = "expected :" + expected;
  const resultSegment = "result:" + result;

  console.log(result === expected ? '✅' : '❌');
  console.log(inputSegment1, inputSegment2, expectedSegment, resultSegment);
  console.log('-----------------------------------------------');
}

function TestCases() {
  testRemainder(1, 1, 0);
  testRemainder(10, 10, 0);

  testRemainder(1, 2, 1);
  testRemainder(10, 15, 10);

  testRemainder(10, 5, 0);
  testRemainder(10, 2, 0);

  testRemainder(11, 2, 1);
  testRemainder(11, 3, 2);
}

TestCases();