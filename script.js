console.log("Hello World");

let state = {
    name: "",
    petsname: "",
    phonenumber: "",
    email: "",
    city: "",
    zipcode: ""
};
let savebtn = document.getElementById("savebutton");
let nameInput = document.getElementById("name");
let petsnameInput = document.getElementById("petsname");
let phonenumberInput = document.getElementById("phonenumber");
let emailInput = document.getElementById("email");
let cityInput = document.getElementById("city");
let zipcodeInput = document.getElementById("zipcode");
function handleSave() {
    console.log("Save button was clicked");
    state.name = nameInput.value;
    state.petsname = petsnameInput.value;
    state.phonenumber = phonenumberInput.value;
    state.email = emailInput.value;
    state.city = cityInput.value;
    state.zipcode = zipcodeInput.value;

    console.log("Add name: " + state.name);
    console.log(state);
    nameInput.value = "";
    petsnameInput.value = "";
    phonenumberInput.value = "";
    emailInput.value = "";
    cityInput.value = "";
    zipcodeInput.value = "";
}

let user = createPetOwner(state.name, state.petsname, state.phonenumber, state.email, state.city, state.zipcode);
user.status();
user.render();
savebtn.addEventListener("click", createPetOwner);