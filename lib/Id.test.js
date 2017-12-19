const assert = require('chai').assert;
const Id = require('./Id');

describe('Id', () => {
    const identity = v => {
        return Id(v);
    };
    const duplicate = v => {
        return Id(v + v);
    };
    const str = 'a string value';

    describe('Monadic laws', () => {

        it('should have left identity', () => {
            const value1 = identity(str).value();
            const value2 = Id.of(str).chain(identity).value();
            assert.equal(value1, value2);
        });

        it('should have right identity', () => {
            const value1 = Id.of(str).value();
            const value2 = Id.of(str).chain(Id.of).value();
            assert.equal(value1, value2);
        });

        it('should have associativity', () => {
            const value1 = Id.of(str).chain(duplicate).chain(identity).value();
            const value2 = Id.of(str).chain(x => duplicate(x).chain(identity)).value();
            assert.equal(value1, value2);
        });

    });

    describe('of', () => {

        it('should behave identically with Id.of() or Id()', () => {
            const value1 = Id(str).value();
            const value2 = Id.of(str).value();
            assert.equal(value1, value2);
        });

    });
});