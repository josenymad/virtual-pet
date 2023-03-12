const Pet = require('../src/pet');

describe('constructor', () => {
    it('returns an object', () => {
        expect(new Pet('Max')).toBeInstanceOf(Object);
    });

    it('names your pet', () => {
        expect(new Pet('Fido').name).toBe('Fido');
        expect(new Pet('Cooper').name).toBe('Cooper');
    });

    it('pet has an initial age of 0', () => {
        expect(new Pet('Lucy').age).toBe(0);
    });
});