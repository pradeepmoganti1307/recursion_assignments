function sumOfAP(firstTerm, difference, nterms) {
  if (nterms === 0) {
    return 0;
  }

  return firstTerm + sumOfAP(firstTerm + difference, difference, nterms - 1);
}

function testSumOfAP(firstTerm, difference, nterms, expected) {
  const result = sumOfAP(firstTerm, difference, nterms);
  const inputSegment = "firstTerm: " + firstTerm + " difference:" + difference;
  const inputSegment2 = "nterms: " + nterms;
  const expectedSegment = "expected :" + expected;
  const resultSegment = "result:" + result;

  console.log(result === expected ? '✅' : '❌');
  console.log(inputSegment, inputSegment2, expectedSegment, resultSegment);
  console.log('-----------------------------------------------');
}

function testCases() {
  testSumOfAP(1, 1, 1, 1);
  testSumOfAP(1, 1, 5, 15);
  testSumOfAP(1, 0, 5, 5);
  testSumOfAP(5, 2, 5, 45);
  testSumOfAP(5, 2, 0, 0);
  testSumOfAP(0, 0, 0, 0);
}

testCases();