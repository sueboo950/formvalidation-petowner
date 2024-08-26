function createPet(name, species, happiness, energy) {
    return {
        name: name,
        species: species,
        happiness: happiness,
        energy: energy,
        status: function() {
            console.log(`${this.name} the ${this.species} is ${this.happiness} happy and has ${this.energy} energy.`);
        },
        toHTML: function() {
            return `<div>${this.name} the ${this.species}</div>`;
        }
    };
}


let addButton = document.getElementById("savePButton");
let petsnameInput = document.getElementById("petsName");
let petsspeciesInput = document.getElementById("petsSpecies");


function handleSave() {
    console.log("click to save");
    let name = petsnameInput.value;
    let species = petsspeciesInput.value;
    let happiness = 10; 
    let energy = 100;
    let pet = createPet(name, species, happiness, energy);
    pet.status();
    console.log(pet.toHTML());
    state.pets.push(pet);
    render();
}


function render() {
    let html = "";
    for (let i = 0; i < state.pets.length; i++) {
        html += state.pets[i].toHTML();
    }
    let output = document.getElementById("petOutput");
    output.innerHTML = html;
}


addButton.addEventListener("click", handleSave);