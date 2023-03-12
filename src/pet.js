function Pet(petName) {
    const initialAge = 0;
    const initialHunger = 0;
    const initialFitness = 10;
    this.name = petName;
    this.age = initialAge;
    this.hunger = initialHunger;
    this.fitness = initialFitness;
};

Pet.prototype.growUp = function() {
    this.age += 1;
    this.hunger += 5;
    this.fitness -= 3;
};

Pet.prototype.walk = function() {
    const maxFitness = 10;
    this.fitness += 4;
    if (this.fitness > maxFitness) {
        this.fitness = maxFitness;
    } else this.fitness = this.fitness;
};

module.exports = Pet;