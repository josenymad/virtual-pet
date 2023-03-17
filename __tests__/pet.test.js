const Pet = require('../src/pet');

describe('constructor', () => {

    it('returns an object', () => {
        expect(new Pet('Max')).toBeInstanceOf(Object);
    });
});

describe('naming pet', () => {

    it('names your pet', () => {
        expect(new Pet('Fido').name).toBe('Fido');
        expect(new Pet('Cooper').name).toBe('Cooper');
    });
});

describe('getting older', () => {

    it('has an initial age of 0', () => {
        expect(new Pet('Lucy').age).toBe(0);
    });

    it('growing up age increases age by 1 year', () => {
        const pet = new Pet('Lucky');
        pet.growUp();
        expect(pet.age).toBe(1);
        pet.growUp();
        expect(pet.age).toBe(2);
    });
});

describe('getting unhealthier', () => {

    it('has an initial hunger of 0', () => {
        expect(new Pet('Scooby').hunger).toBe(0);
    });

    it('growing up increases hunger by 5', () => {
        const pet = new Pet('Max');
        pet.growUp();
        expect(pet.hunger).toBe(5);
        pet.growUp();
        expect(pet.hunger).toBe(10);
    });

    it('has an initial fitness of 10', () => {
        expect(new Pet('Roger').fitness).toBe(10);
    });

    it('growing up decreases fitness by 3', () => {
        const pet = new Pet('Pluto');
        pet.growUp();
        expect(pet.fitness).toBe(7);
        pet.growUp();
        expect(pet.fitness).toBe(4);
    });
});

describe('keeping fit', () => {

    it('walking increases fitness by 4', () => {
        const pet = new Pet('Bella');
        pet.fitness = 9;
        pet.walk();
        expect(pet.fitness).toBe(10);
        pet.fitness = 4;
        pet.walk();
        expect(pet.fitness).toBe(8);
    });
});

describe('keeping fed', () => {

    it('feeding decreases hunger by 3', () => {
        const pet = new Pet('Charlie');
        pet.growUp();
        pet.feed();
        expect(pet.hunger).toBe(2);
        pet.feed();
        expect(pet.hunger).toBe(0);
    });
});

describe('checking up', () => {

    it('checking up returns pet state', () => {
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
});

describe('death', () => {

    it('checks if the pet is alive', () => {
        const pet = new Pet('Bruno');
        expect(pet.isAlive).toBeTruthy();
        pet.fitness = 0;
        expect(pet.isAlive).toBeFalsy();

        const pet2 = new Pet('Bruno Jr');
        pet2.hunger = 10;
        expect(pet2.isAlive).toBeFalsy();

        const pet3 = new Pet('Brunette');
        pet3.age = 30;
        expect(pet3.isAlive).toBeFalsy();
    });
});

describe('guard clauses', () => {

    it('check up returns mortality', () => {
        const pet = new Pet('Trixie');
        pet.fitness = 0;
        expect(() => pet.checkUp()).toThrow('Your pet is no longer alive :(');
    });

    it('checks if alive before growing up', () => {
        const pet = new Pet('Fenton');
        pet.age = 30;
        expect(() => pet.growUp()).toThrow('Your pet is no longer alive :(');
    });

    it('checks if alive before feeding', () => {
        const pet = new Pet('Rex');
        pet.hunger = 10;
        expect(() => pet.feed()).toThrow('Your pet is no longer alive :(');
    });

    it('checks if alive before walking', () => {
        const pet = new Pet('Garfield');
        pet.fitness = 0;
        expect(() => pet.feed()).toThrow('Your pet is no longer alive :(');
    });
});

describe('having a baby', () => {

    it('checks the children property is an array', () => {
        const parent = new Pet('biggie');
        expect(parent.children).toStrictEqual([]);
    });

    it('adopts child by adding to children property', () => {
        const parent = new Pet('oldie');
        const child = new Pet('whipper snapper');
        parent.adoptChild(child);
        expect(parent.children).toStrictEqual([child]);
        const baby = new Pet('baby');
        parent.adoptChild(baby);
        expect(parent.children).toStrictEqual([child, baby]);
    });

    it('checks child is not able to adopt parent', () => {
        const parent = new Pet('Big');
        const child = new Pet('Small');
        parent.adoptChild(child);
        child.adoptChild(parent);
        expect(child.adoptChild(parent)).toBe('Pets cannot adopt their own parents!');
    });
});


/* to copy into node for testing
const Pet = require('./src/pet');
const pet = new Pet('animal'); */ 