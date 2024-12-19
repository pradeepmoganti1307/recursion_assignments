function findLastIndexOfChar(string, char, index) {
  if (string[index] === char) {
    return index;
  }

  if (index === -1) {
    return -1;
  }

  return findLastIndexOfChar(string, char, index - 1);
}

function findLastIndex(string, char) {
  return findLastIndexOfChar(string, char, string.length);
}

function testFindLastIndex(string, character, expected) {
  const result = findLastIndex(string, character);
  const inputSegment1 = "string :" + string;
  const inputSegment2 = "character :" + character;
  const expectedSegment = "expected :" + expected;
  const resultSegment = "result:" + result;

  console.log(result === expected ? '✅' : '❌');
  console.log(inputSegment1, inputSegment2, expectedSegment, resultSegment);
  console.log('-----------------------------------------------');
}

function testCases() {
  testFindLastIndex('hello', 'h', 0);
  testFindLastIndex('hello', 'o', 4);
  testFindLastIndex('hello', 'l', 3);
  testFindLastIndex(' eeeee', 'e', 5);
  testFindLastIndex('e', 'e', 0);
  testFindLastIndex('aebeceg', 'e', 5);

  testFindLastIndex('hello', 'x', -1);
  testFindLastIndex('hello', '', -1);
  testFindLastIndex('', 'x', -1);
  testFindLastIndex('', '', -1);
}

testCases();