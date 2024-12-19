function isSubStringPresentAt(string, otherString, index, subIndex) {
  if (subIndex === otherString.length) {
    return true;
  }

  if (string[index] !== otherString[subIndex]) {
    return false;
  }

  return isSubStringPresentAt(string, otherString, index + 1, subIndex + 1);
}

function isItSubStringOfString(string, otherString, index) {
  if (index === string.length) {
    return false;
  }

  if (isSubStringPresentAt(string, otherString, index, 0)) {
    return true;
  }

  return isItSubStringOfString(string, otherString, index + 1);
}

function isSubString(string, otherString) {
  if (string.length <= otherString.length || otherString === '') {
    return string === otherString;
  }

  return isItSubStringOfString(string, otherString, 0);
}

//testFragment
function testIsSubstring(string, otherString, expected) {
  const result = isSubString(string, otherString);
  const inputSegment1 = "string :" + string;
  const inputSegment2 = "otherString :" + otherString;
  const expectedSegment = "expected :" + expected;
  const resultSegment = "result:" + result;

  console.log(result === expected ? '✅' : '❌');
  console.log(inputSegment1, inputSegment2, expectedSegment, resultSegment);
  console.log('-----------------------------------------------');
}

function testCases() {
  testIsSubstring('', '', true);
  testIsSubstring('hello', 'hello', true);
  testIsSubstring('ello world', 'rld', true);
  testIsSubstring('ello world', 'ell', true);
  testIsSubstring('hello', 'ell', true);
  testIsSubstring('a', 'a', true);

  testIsSubstring('', 'hello', false);
  testIsSubstring('hello', '', false);
  testIsSubstring('111111', '2', false);
  testIsSubstring('test', 'testCase', false);
  testIsSubstring('this is a testCase', 'normal', false);
}

testCases();