function isDivisible(dividend, divisor) {
  if (dividend < 1) {
    return dividend === 0;
  }

  return isDivisible(dividend - divisor, divisor);
}

function isThereAnyFactor(primeCandidate, factor) {
  if (isDivisible(primeCandidate, factor)) {
    return factor === primeCandidate;
  }

  return isThereAnyFactor(primeCandidate, factor + 1);
}

//mainFunction
function isPrime(primeCandidate) {

  if (primeCandidate < 2) {
    return false;
  }

  return isThereAnyFactor(primeCandidate, 2);
}

//testFragment.
function testIsPrime(primeCandidate, expected) {
  const result = isPrime(primeCandidate);
  const inputSegment = "primeCandidate :" + primeCandidate;
  const expectedSegment = "expected :" + expected;
  const resultSegment = "result:" + result;

  console.log(result === expected ? '✅' : '❌');
  console.log(inputSegment, expectedSegment, resultSegment);
  console.log('-----------------------------------------------');
}

function testCases() {
  testIsPrime(0, false);
  testIsPrime(1, false);
  testIsPrime(2, true);
  testIsPrime(3, true);
  testIsPrime(4, false);
  testIsPrime(6, false);
  testIsPrime(11, true);
  testIsPrime(121, false);
}

testCases();