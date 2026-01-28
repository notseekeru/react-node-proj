const adjectives = [
  'quick','wild','brave','bright','calm','mighty','silent','fuzzy','lucky','bold'
];
const nouns = [
  'fox','tiger','panda','eagle','otter','raven','wolf','shark','bud','nova'
];

function rand(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function randomUsername() {
  const adj = rand(adjectives);
  const noun = rand(nouns);
  const num = Math.floor(Math.random() * 90) + 10; // two-digit
  return `${adj}${noun}${num}`;
}

const usernames = Array.from({ length: 5 }, () => randomUsername());
console.log(usernames.join('\n'));
