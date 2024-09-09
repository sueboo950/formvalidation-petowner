console.log("Hello World");
let savebtn = document.getElementById("savebutton");
let nameInput = document.getElementById("name");
let petsnameInput = document.getElementById("petsname");
let phonenumberInput = document.getElementById("phonenumber");
let emailInput = document.getElementById("email");
let cityInput = document.getElementById("cityname");
let zipcodeInput = document.getElementById("zipcode");

function handleSave() {
    console.log("Save button was clicked");
    let state = {
        name: nameInput.value,
        petsname: petsnameInput.value,
        phonenumber: phonenumberInput.value,
        email: emailInput.value,
        cityname: cityInput.value,
        zipcode: zipcodeInput.value,
    };

    localStorage.setItem("name", state.name);
    localStorage.setItem("petsname", state.petsname);
    localStorage.setItem("phonenumber", state.phonenumber);
    localStorage.setItem("email", state.email);
    localStorage.setItem("cityname", state.cityname);
    localStorage.setItem("zipcode", state.zipcode);
}

savebtn.addEventListener("click", handleSave);
