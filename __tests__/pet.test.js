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

    it('pet age increases by 1 year', () => {
        const pet = new Pet('Lucky');
        pet.growUp();
        expect(pet.age).toBe(1);
        pet.growUp();
        expect(pet.age).toBe(2);
    });

    it('pet has an initial hunger of 0', () => {
        expect(new Pet('Scooby').hunger).toBe(0);
    });

    it('pet growing up increases hunger by 5', () => {
        const pet = new Pet('Max');
        pet.growUp();
        expect(pet.hunger).toBe(5);
        pet.growUp();
        expect(pet.hunger).toBe(10);
    });

    it('pet has an initial fitness of 10', () => {
        expect(new Pet('Roger').fitness).toBe(10);
    });

    it('pet growing up decreases fitness by 3', () => {
        const pet = new Pet('Pluto');
        pet.growUp();
        expect(pet.fitness).toBe(7);
        pet.growUp();
        expect(pet.fitness).toBe(4);
    });

    it('walking pet increases fitness by 4', () => {
        const pet = new Pet('Bella');
        pet.growUp();
        pet.walk();
        expect(pet.fitness).toBe(10);
        pet.growUp();
        pet.growUp();
        pet.walk();
        expect(pet.fitness).toBe(8);
    });
});