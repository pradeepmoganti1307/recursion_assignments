function convertStringToNumber(string, start, result) {
  if (start === string.length) {
    return result;
  }

  result = result * 10 + (+string[start]);
  return convertStringToNumber(string, start + 1, result);
}

function stringToNumber(string) {
  if (string[0] === '-') {
    return -1 * convertStringToNumber(string, 1, 0);
  }

  return convertStringToNumber(string, 0, 0);
}

//testFragment.
function testStringToNumber(string, expected) {
  const result = stringToNumber(string);
  const inputSegment = "string:" + string;
  const expectedSegment = "expected :" + expected;
  const resultSegment = "result:" + result;

  console.log(result === expected ? '✅' : '❌');
  console.log(inputSegment, expectedSegment, resultSegment);
  console.log('-----------------------------------------------');
}

function testCases() {
  testStringToNumber("0", 0);
  testStringToNumber("1", 1);
  testStringToNumber("12", 12);
  testStringToNumber("120", 120);
  testStringToNumber("0004", 4);

  testStringToNumber("", 0);
  testStringToNumber("-1", -1);
  testStringToNumber("-12", -12);
  testStringToNumber("-120", -120);
  testStringToNumber("-00004", -4);
}

testCases()