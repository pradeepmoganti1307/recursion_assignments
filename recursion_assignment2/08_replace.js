function getReplacement(character, match, replacement) {
  return character === match ? replacement : character;
}

function replaceString(string, match, replacement, index) {
  if (index === string.length) {
    return '';
  }

  const charToBeAdded = getReplacement(string[index], match, replacement);

  return charToBeAdded + replaceString(string, match, replacement, index + 1);
}

function replace(string, match, replacement) {
  return replaceString(string, match, replacement, 0);
}

//test fragement start from here
function testReplace(string, match, replacement, expected) {
  const result = replace(string, match, replacement);
  const inputSegment = "string: " + string + " match:" + match;
  const inputSegment2 = "replace: " + replacement;
  const expectedSegment = "expected :" + expected;
  const resultSegment = "result:" + result;

  console.log(result === expected ? '✅' : '❌');
  console.log(inputSegment, inputSegment2, expectedSegment, resultSegment);
  console.log('-----------------------------------------------');
}

function testCases() {
  testReplace('hello world', 'l', 'n', "henno wornd");
  testReplace('no spaces in here', ' ', '_', "no_spaces_in_here");
  testReplace('no', ' ', '_', 'no');
  testReplace('no spaces in here', ' ', '-', "no-spaces-in-here");
  testReplace('', 'd', 'e', '');
  testReplace('ddddde', 'd', 'e', "eeeeee");
}

testCases();