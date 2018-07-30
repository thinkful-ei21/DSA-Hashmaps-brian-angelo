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
    console.log(lor);
    console.log(lor.get('maiar'));
}

main();