function nthFibonacciTerm(number) {
  if (number < 3) {
    return number === 2 ? 1 : 0;
  }
//return number - 1;
  return nthFibonacciTerm(number - 1) + nthFibonacciTerm(number - 2);
}

// testFragment.
function testnthFibonacciTerm(number, expected) {
  const result = nthFibonacciTerm(number);
  const inputSegment = "nthFibonacci:" + number;
  const expectedSegment = "expected :" + expected;
  const resultSegment = "result:" + result;

  console.log(result === expected ? '✅' : '❌');
  console.log(inputSegment, expectedSegment, resultSegment);
  console.log('-----------------------------------------------');
}

function testCases() {
  testnthFibonacciTerm(0, 0);
  testnthFibonacciTerm(1, 0);
  testnthFibonacciTerm(2, 1);
  testnthFibonacciTerm(3, 1);
  testnthFibonacciTerm(4, 2);
  testnthFibonacciTerm(5, 3);
  testnthFibonacciTerm(6, 5);
  testnthFibonacciTerm(20, 4181);
}

testCases();