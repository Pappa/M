const M = require('./M');

const v = 'banana';
const f = v => v+v;

let m = M.Id.of(v);
console.log(m.chain(f));
