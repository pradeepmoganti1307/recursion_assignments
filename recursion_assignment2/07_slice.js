function max(number1, number2) {
  return number1 > number2 ? number1 : number2;
}

function min(number1, number2) {
  return number1 < number2 ? number1 : number2;
}

function sliceOfString(string, start, end) {
  if (start > end) {
    return '';
  }

  return string[start] + sliceOfString(string, start + 1, end);
}

function slice(string, start, end) {
  start = max(start, 0);
  end = min(end, string.length - 1);

  return sliceOfString(string, start, end);
}

//test fragement start from here
function testSlice(string, start, end, expected) {
  const result = slice(string, start, end);
  const inputSegment = "string: " + string + " start: " + start;
  const inputSegment2 = "end: " + end;
  const expectedSegment = "expected :" + expected;
  const resultSegment = "result:" + result;

  console.log(result === expected ? '✅' : '❌');
  console.log(inputSegment, inputSegment2, expectedSegment, resultSegment);
  console.log('-----------------------------------------------');
}

function testCases() {
  testSlice('hello', 0, 4, 'hello');
  testSlice('hello', 1, 3, 'ell');
  testSlice('hello', -1, 3, 'hell');
  testSlice('hello', 0, 6, 'hello');
  testSlice('hello', -1, -2, '');
  testSlice('hello', 5, 6, '');
  testSlice('hello', 7, 4, '');
  testSlice('hello', 3, 3, 'l');
}

testCases();

