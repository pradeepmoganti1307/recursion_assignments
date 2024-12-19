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

function isPrime(primeCandidate) {
  if (primeCandidate < 2) {
    return false;
  }

  return isThereAnyFactor(primeCandidate, 2);
}

//mainFunction
function firstPrimeAbove(number) {

  if (isPrime(number + 1)) {
    return number + 1;
  }

  return firstPrimeAbove(number + 1);
}

//testFragment
function testfirstPrimeAbove(number, expected) {
  const result = firstPrimeAbove(number);
  const inputSegment = "number :" + number;
  const expectedSegment = "expected :" + expected;
  const resultSegment = "result:" + result;

  console.log(result === expected ? '✅' : '❌');
  console.log(inputSegment, expectedSegment, resultSegment);
  console.log('-----------------------------------------------');
}

function testCases() {
  testfirstPrimeAbove(0, 2);
  testfirstPrimeAbove(1, 2);
  testfirstPrimeAbove(2, 3);
  testfirstPrimeAbove(3, 5);
  testfirstPrimeAbove(4, 5);
  testfirstPrimeAbove(6, 7);
  testfirstPrimeAbove(11, 13);
  testfirstPrimeAbove(121, 127);
}

testCases();


