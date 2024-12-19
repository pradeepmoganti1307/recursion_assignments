function isStringPalindrome(string, forwardIndex, backwardIndex) {
  if (forwardIndex > backwardIndex) {
    return true;
  }

  if (string[forwardIndex] !== string[backwardIndex]) {
    return false;
  }

  return isStringPalindrome(string, forwardIndex + 1, backwardIndex - 1);
}

function isPalindrome(palindromeCandidate) {
  if (palindromeCandidate === '') {
    return true;
  }

  const string = palindromeCandidate;
  return isStringPalindrome(string, 0, string.length - 1);
}

//testFragment.
function testIsPalindrome(palindromeCandidate, expected) {
  const result = isPalindrome(palindromeCandidate);
  const inputSegment = "palindromeCandidate:" + palindromeCandidate;
  const expectedSegment = "expected :" + expected;
  const resultSegment = "result:" + result;

  console.log(result === expected ? '✅' : '❌');
  console.log(inputSegment, expectedSegment, resultSegment);
  console.log('-----------------------------------------------');
}

function testCases() {
  testIsPalindrome('malayalam', true);
  testIsPalindrome('hello', false);
  testIsPalindrome('', true);
  testIsPalindrome('P', true);
  testIsPalindrome('PP', true);
  testIsPalindrome('MP', false);
}

testCases();