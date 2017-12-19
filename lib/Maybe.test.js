const assert = require('chai').assert;
const Maybe = require('./Maybe');

describe('Maybe', () => {
    const f = v => {
        return Maybe(v);
    };
    const g = v => {
        return Maybe(v + v);
    };
    const str = 'a string value';

    describe('Monadic laws', () => {

        it('should have left identity', () => {
            const value1 = f(str).value();
            const value2 = Maybe.of(str).chain(f).value();
            assert.equal(value1, value2);
        });

        it('should have right identity', () => {
            const value1 = Maybe.of(str).value();
            const value2 = Maybe.of(str).chain(Maybe.of).value();
            assert.equal(value1, value2);
        });

        it('should have associativity', () => {
            const value1 = Maybe.of(str).chain(g).chain(f).value();
            const value2 = Maybe.of(str).chain(x => g(x).chain(f)).value();
            assert.equal(value1, value2);
        });

    });
});