const assert = require('chai').assert;
const Id = require('./Id');

describe('Id', () => {
    const f = v => {
        return Id(v);
    };
    const g = v => {
        return Id(v + v);
    };
    const str = 'a string value';

    describe('Monadic laws', () => {

        it('should have left identity', () => {
            const value1 = f(str).toString();
            const value2 = Id.of(str).chain(f).toString();
            assert.equal(value1, value2);
        });

        it('should have right identity', () => {
            const value1 = Id.of(str).toString();
            const value2 = Id.of(str).chain(Id.of).toString();
            assert.equal(value1, value2);
        });

        it('should have associativity', () => {
            const value1 = Id.of(str).chain(g).chain(f).toString();
            const value2 = Id.of(str).chain(x => g(x).chain(f)).toString();
            assert.equal(value1, value2);
        });

    });

    describe('of', () => {

        it('should behave identically with Id.of() or Id()', () => {
            const value1 = Id(str).toString();
            const value2 = Id.of(str).toString();
            assert.equal(value1, value2);
        });

    });
});