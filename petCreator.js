function createPet(nameInput, speciesInput, happinessInput) {
    let pet = {
        name: nameInput,
        species: speciesInput,
        happiness: happinessInput,
        energy: Math.floor(Math.random() * 51), // random energy between 0 and 50

        status() {
            console.log(`Pet name: ${this.name} Species: ${this.species} Happiness: ${this.happiness} Energy: ${this.energy}.`);
        },
        play() {
            this.energy -= 15;
            this.happiness += 10;
            console.log(`You played with ${this.name}! Happiness is now ${this.happiness}, and energy is now ${this.energy}.`);
        },
        feed() {
            if (this.energy < 30) {
                this.energy += 20;
                this.happiness += 20;
                console.log(`You fed ${this.name}! Happiness is now ${this.happiness} and energy is now ${this.energy}.`);
            } else {
                console.log(`${this.name} is not hungry. Energy is still ${this.energy}.`);
            }
        },
        rest() {
            this.energy = 100;
            console.log(`${this.name} has rested. Energy is now fully restored to 100.`);
        },
        toHTML: function() {
            return `
            <div class="col-md-4">
                <div class="col">
                    <div class="card">
                        <h4>${this.name}</h4>
                        <p>Species: ${this.species}</p>
                    </div>
                </div>
            </div>
            `;
        }
        
        
    }
    console.log("created pets...");
    pet.status();
    return pet;
}