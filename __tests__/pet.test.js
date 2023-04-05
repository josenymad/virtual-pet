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
        pet.fitness = 4;
        pet.walk();
        expect(pet.fitness).toBe(8);
    });

    it('does not increase fitness by more than 10', () => {
        const pet = new Pet('Ella');
        pet.fitness = 9;
        pet.walk();
        expect(pet.fitness).toBe(10);
    });
});

describe('keeping fed', () => {
    it('feeding decreases hunger by 3', () => {
        const pet = new Pet('Charlie');
        pet.hunger = 5;
        pet.feed();
        expect(pet.hunger).toBe(2);

        pet.feed();
        expect(pet.hunger).toBe(0);
    });
});

describe('checking up', () => {
    it('checks it feels great when created or when none of the below are true', () => {
        const pet = new Pet('Fluffy');
        expect(pet.checkUp()).toBe('I feel great!');
    });

    it('checks it is hungry when hunger is 5 or more', () => {
        const pet = new Pet('Fluffo');
        pet.hunger = 5;
        expect(pet.checkUp()).toBe('I am hungry');
    });

    it('checks it needs walk if fitness is 3 or less', () => {
        const pet = new Pet('Fluffe');
        pet.fitness = 3;
        expect(pet.checkUp()).toBe('I need a walk');
    });

    it('checks it needs a walk and is hungry when both of the above are true', () => {
        const pet = new Pet('Poor pet');
        pet.hunger = 5;
        pet.fitness = 3;
        expect(pet.checkUp()).toBe('I am hungry AND I need a walk');
    });
});

describe('death', () => {
    it('checks if the pet is dead: low fitness', () => {
        const pet = new Pet('Bruno');
        pet.fitness = 0;
        expect(pet.isAlive).toBeFalsy();
    });

    it('checks if the pet is dead: high hunger', () => {
        const pet2 = new Pet('Bruno Jr');
        pet2.hunger = 10;
        expect(pet2.isAlive).toBeFalsy();
    });

    it('checks if the pet is dead: old age', () => {
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

describe('speaks back when given commands', () => {
    it('replies when taken for a walk', () => {
        const pet = new Pet('Cheeky');
        expect(pet.walk()).toBe('About time we went outside');
    });

    it('replies when being fed', () => {
        const pet = new Pet('Greedy');
        expect(pet.feed()).toBe('Pretty tasty that, got anymore?');
    });

    it('replies when getting old', () => {
        const pet = new Pet('Grumpy');
        expect(pet.growUp()).toBe('Back in my day...vets are not what they used to be');
    });

    it('replies when adopting a child', () => {
        const parent = new Pet('Broody');
        const child = new Pet('Newborn');
        expect(parent.adoptChild(child)).toBe('Welcome to the family!');
    });
});