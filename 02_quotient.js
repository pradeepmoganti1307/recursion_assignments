function quotient(dividend, divisor) {
  if (dividend < divisor) {
    return 0;
  }

  return 1 + quotient(dividend - divisor, divisor);
}

function testQuotient(dividend, divisor, expected) {
  const result = quotient(dividend, divisor);
  const inputSegment1 = "dividend :" + dividend;
  const inputSegment2 = "divisor :" + divisor;
  const expectedSegment = "expected :" + expected;
  const resultSegment = "result:" + result;

  console.log(result === expected ? '✅' : '❌');
  console.log(inputSegment1, inputSegment2, expectedSegment, resultSegment);
  console.log('-----------------------------------------------');
}

function testCases() {
  testQuotient(1, 1, 1);
  testQuotient(10, 10, 1);

  testQuotient(2, 1, 2);
  testQuotient(10, 1, 10);

  testQuotient(1, 2, 0);
  testQuotient(10, 15, 0);

  testQuotient(15, 3, 5);
  testQuotient(6, 2, 3);
}

testCases();