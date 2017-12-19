
const Id = v => ({
    map: f => Id.of(f(v)),
    chain: f => f(v),
    toString: () => `Id(${ v })`
});
Id.of = Id;

module.exports = Id;