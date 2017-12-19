
const Id = v => ({
    map: f => Id.of(f(v)),
    chain: f => f(v),
    value: () => v
});
Id.of = Id;

module.exports = Id;