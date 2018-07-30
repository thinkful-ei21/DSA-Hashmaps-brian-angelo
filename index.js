const HashMap = require('./hashmap');

function main() {
    let lor = new HashMap(10);
    lor.set('hobbit', 'bilbo');
    lor.set('hobbit', 'frodo');
    lor.set('wizard', 'gandolf');
    lor.set('human', 'aragon');
    lor.set('elf', 'legolas');
    lor.set('maiar', 'the necromancer');
    lor.set('maiar', 'sauron');
    lor.set('ringbearer', 'gollum');
    lor.set('ladyoflight', 'galadriel');
    lor.set('halfelven', 'arwen');
    lor.set('ent', 'treebeard');
    lor.set('ent', 'treebeard');
    // console.log(lor);
    // console.log(lor.get('maiar'));
    // console.log(lor);
    console.log(anagrams(['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race']));

    console.log(permutation('mom'));
}

main();

function permutation(string) {
    let hash = new HashMap();

    for (let i = 0; i < string.length; i++) {
        try {
            let slot = hash.get(string[i]);
            hash.set(string[i], slot+1);
        } catch (err) {
            hash.set(string[i], 1);
        }     
    }
    let num = 0;

    hash.forEach((item) => {
        if (item % 2 !== 0) {
            num++
        }
    });

    return num > 1 ? false : true;
}

function anagrams(array) {
  let hash = new HashMap();
  
  for (let i = 0; i < array.length; i++) {
    let alphabetized = sortAlphabet(array[i]);
    try {
      let group = hash.get(alphabetized);
      hash.set(alphabetized, [...group, array[i]]);
    } catch (err) {
      hash.set(alphabetized, [array[i]]);
    }
  }
  let arr = [];
  hash.forEach((item) => arr.push(item))
  return arr;
}

function sortAlphabet(str) {
  return [...str].sort((a, b) => a.localeCompare(b)).join('');
}