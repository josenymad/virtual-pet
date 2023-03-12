function Pet(petName) {
    this.name = petName;
    this.age = 0;
    this.growUp = function() {
        this.age += 1;
    }
};

module.exports = Pet;