const pet = require('../src/pet');

describe('constructor', () => {
    it('returns an object', () => {
        expect(new pet('Fido')).toBeInstanceOf(Object);
    });

    it('names your pet', () => {
        expect(new pet('Fido').name).toBe('Fido');
        expect(new pet('Cooper').name).toBe('Cooper');
    });
});