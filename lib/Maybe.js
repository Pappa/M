
const Maybe = v => ({
    map: f => {
        if (this.isNothing()) {
            return Maybe.of(null);
        }
        return Maybe.of(f(v));
    },
    filter: f => {
        if (this.isNothing() || !f(v)) {
            return Maybe.of(null);
        }
        return Maybe.of(f(v));
    },
    chain: f => f(v),
    isNothing: () => (v === null || v === undefined),
    value: () => v
});
Maybe.of = Maybe;

module.exports = Maybe;