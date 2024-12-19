function reverseTheString(string, start, end) {
  if (start === end) {
    return string[end];
  }

  return string[end] + reverseTheString(string, start, end - 1);
}

function reverse(string) {
  if (string === '') {
    return '';
  }

  return reverseTheString(string, 0, string.length - 1);
}

function testReverse(string, expected) {
  const result = reverse(string);
  const inputSegment = "reverse:" + string;
  const expectedSegment = "expected :" + expected;
  const resultSegment = "result:" + result;

  console.log(result === expected ? '✅' : '❌');
  console.log(inputSegment, expectedSegment, resultSegment);
  console.log('-----------------------------------------------');
}

function testCases() {
  testReverse('hello', 'olleh');
  testReverse('', '');
  testReverse('malayalam', 'malayalam');
}

testCases();
