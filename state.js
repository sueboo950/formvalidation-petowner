let state = {
pets: [],
}

// Retrieve data from localStorage and log it
state.name = localStorage.getItem("name");
state.petsname = localStorage.getItem("petsname");
state.phonenumber = localStorage.getItem("phonenumber");
state.email = localStorage.getItem("email");
state.cityname = localStorage.getItem("cityname");
state.zipcode = localStorage.getItem("zipcode");

let user = createPetOwner(state.name, state.petsname, state.phonenumber, state.email, state.cityname, state.zipcode);

user.render();

