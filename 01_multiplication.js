function multiply(multiplier, multiplicand) {
  if (multiplier <= 0) {
    return 0;
  }

  return multiplicand + multiply(multiplier - 1, multiplicand);
}

function testMultiply(multiplier, multiplicand, expected) {
  const result = multiply(multiplier, multiplicand);
  const inputSegment1 = "multiplier :" + multiplier;
  const inputSegment2 = "multiplicand :" + multiplicand;
  const expectedSegment = "expected :" + expected;
  const resultSegment = "result:" + result;

  console.log(result === expected ? '✅' : '❌');
  console.log(inputSegment1, inputSegment2, expectedSegment, resultSegment);
  console.log('-----------------------------------------------');
}

function testCases() {
  testMultiply(0, 0, 0);
  testMultiply(0, 1, 0);
  testMultiply(1, 0, 0);

  testMultiply(1, 1, 1);

  testMultiply(1, 2, 2);
  testMultiply(2, 1, 2);

  testMultiply(2, 3, 6);
  testMultiply(3, 2, 6);
}

testCases();