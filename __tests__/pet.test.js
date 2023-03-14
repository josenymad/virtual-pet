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

    it('feeding pet decreases hunger by 3', () => {
        const pet = new Pet('Charlie');
        pet.growUp();
        pet.feed();
        expect(pet.hunger).toBe(2);
        pet.feed();
        expect(pet.hunger).toBe(0);
    });

    it('checking up on pet returns pet state', () => {
        const pet = new Pet('Fluffy');
        expect(pet.checkUp()).toBe('I feel great!');
        pet.growUp();
        expect(pet.checkUp()).toBe('I am hungry');
        pet.feed();
        pet.fitness = 3;
        expect(pet.checkUp()).toBe('I need a walk');
        pet.hunger = 5;
        expect(pet.checkUp()).toBe('I am hungry AND I need a walk');
    });

    it('checks if the pet is alive', () => {
        const pet = new Pet('Bruno');
        expect(pet.isAlive()).toBeTruthy();
        pet.fitness = 0;
        expect(pet.isAlive()).toBeFalsy();
        pet.walk();
        pet.hunger = 10;
        expect(pet.isAlive()).toBeFalsy();
        pet.feed();
        pet.age = 30;
        expect(pet.isAlive()).toBeFalsy();
    });
});

/* to copy into node testing
const Pet = require('./src/pet');
const pet = new Pet('animal'); */ 