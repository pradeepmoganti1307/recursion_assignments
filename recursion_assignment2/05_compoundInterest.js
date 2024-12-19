function compoundInterest(principal, rateOfInterest, time) {
  if (time === 0) {
    return 0;
  }

  const simpleInterest = (principal * rateOfInterest) / 100;
  const amount = principal + simpleInterest;

  return simpleInterest + compoundInterest(amount, rateOfInterest, time - 1);
}

function testCompoundInterest(principal, rateOfInterest, time, expected) {
  const result = compoundInterest(principal, rateOfInterest, time);
  const inputSegment = "principal: " + principal + " rateOfInterest:";
  const inputSegment2 = rateOfInterest + "time: " + time;
  const expectedSegment = "expected :" + expected;
  const resultSegment = "result:" + result;

  console.log(result === expected ? '✅' : '❌');
  console.log(inputSegment, inputSegment2, expectedSegment, resultSegment);
  console.log('-----------------------------------------------');
}

function testCases() {
  testCompoundInterest(1000, 5, 0, 0);
  testCompoundInterest(1000, 0, 1, 0);
  testCompoundInterest(0, 3, 1, 0);
  testCompoundInterest(0, 0, 0, 0);
  testCompoundInterest(1000, 5, 1, 50);
  testCompoundInterest(1000, 5, 2, 102.5);
  testCompoundInterest(1000, 5, 3, 157.625);
}

testCases();