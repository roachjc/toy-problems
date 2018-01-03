function reverseWords(sentence) {
  const words = sentence.split(' ');
  let startIndex = 0;
  let endIndex = words.length - 1;
  while (startIndex < endIndex) {
    [words[startIndex], words[endIndex]] = [words[endIndex], words[startIndex]];
    startIndex += 1;
    endIndex -= 1;
  }
  return words.join(' ');
}

const sentenceToReverse = 'hello my name is jonathan';

console.log(reverseWords(sentenceToReverse));
