const M = require('./M');

const v = 'banana';
const f = v => v;

let m = M.Id.of(v);
console.log(m.chain(f));

let nothing = null;
let something = 'blarg';

console.log(M.Maybe.of(nothing).chain(f));
console.log(M.Maybe.of(something).chain(f));