console.log("Hello World");
let savebtn = document.getElementById("savebutton");
let nameInput = document.getElementById("name");
let petsnameInput = document.getElementById("petsname");
let phonenumberInput = document.getElementById("phonenumber");
let emailInput = document.getElementById("email");
let cityInput = document.getElementById("city");
let zipcodeInput = document.getElementById("zipcode");

function handleSave() {
    console.log("Save button was clicked");
    localStorage.setItem("name", state.name);
    localStorage.setItem("petsname", state.petsname);
    localStorage.setItem("phonenumber", state.phonenumber);
    localStorage.setItem("email", state.email);
    localStorage.setItem("city", state.city);
    localStorage.setItem("zipcode", state.zipcode);

    let user = createPetOwner(state.name, state.petsname, state.phonenumber, state.email, state.city, state.zipcode);
    user.status();
    user.render();
}



savebtn.addEventListener("click", handleSave);


function createPetOwner(name, petsname, phonenumber, email, city, zipcode) {
return {
    name: "",
    petsname: "",
    phonenumber: "",
    email: "",
    city: "",
    zipcode: "",
    status: function () {
        console.log(`Owner: ${this.name} Pet: ${this.petsname}`);
    },
    render: function () {
        console.log(`Rendering owner: ${this.name}`);
    }
};
}
user.render();
savebtn.addEventListener("click", createPetOwner);