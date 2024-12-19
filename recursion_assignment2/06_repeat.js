function repeat(string, nTimes) {
  if (nTimes === 0) {
    return '';
  }

  return string + repeat(string, nTimes - 1);
}

function testRepeat(string, nTimes, expected) {
  const result = repeat(string, nTimes, expected);
  const inputSegment = "string: " + string + " nTimes:" + nTimes;
  const expectedSegment = "expected :" + expected;
  const resultSegment = "result:" + result;

  console.log(result === expected ? '✅' : '❌');
  console.log(inputSegment, expectedSegment, resultSegment);
  console.log('-----------------------------------------------');
}

function testCases() {
  testRepeat('hi', 0, '');
  testRepeat('', 4, '');
  testRepeat('hi', 4, 'hihihihi');
}

testCases();