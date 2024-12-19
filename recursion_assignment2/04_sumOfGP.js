function sumOfGP(firstTerm, commonRatio, nterms) {
  if (nterms === 0) {
    return 0;
  }

  return firstTerm + sumOfGP(firstTerm * commonRatio, commonRatio, nterms - 1);
}

function testSumOfGP(firstTerm, commonRatio, nterms, expected) {
  const result = sumOfGP(firstTerm, commonRatio, nterms);
  const inputSegment = "firstTerm: " + firstTerm + " commonRatio:";
  const inputSegment2 = commonRatio + " nterms:" + nterms;
  const expectedSegment = " expected:" + expected;
  const resultSegment = "result:" + result;

  console.log(result === expected ? '✅' : '❌');
  console.log(inputSegment, inputSegment2, expectedSegment, resultSegment);
  console.log('-----------------------------------------------');
}

function testCases() {
  testSumOfGP(1, 1, 1, 1);
  testSumOfGP(2, 5, 4, 312);
  testSumOfGP(4, 4, 0, 0);
  testSumOfGP(1, 0, 5, 1);
  testSumOfGP(10, -3, 4, -200);
}

testCases();