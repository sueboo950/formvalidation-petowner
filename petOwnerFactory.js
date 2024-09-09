function createPetOwner(name, petsname, phonenumber, email, city, zipcode) {
    let petOwner = {
        name: name,
        pets: petsname,
        phone: phonenumber,
        email: email,
        city: cityname,
        zipcode: zipcode,
        status: function () {
            console.log(`Name: ${this.name} Pet's Name: ${this.petsname} Phone Number: ${this.phone} 
                Email: ${this.email} City: ${this.cityname} Zip Code: ${this.zipcode}`);
        },
        render: function() {
            document.getElementById("nameOutput").textContent = this.name;
            document.getElementById("petsNameOutput").textContent = this.pets;
            document.getElementById("phoneNumberOutput").textContent = this.phone;
            document.getElementById("emailOutput").textContent = this.email;
            document.getElementById("cityOutput").textContent = this.city;
            document.getElementById("zipCodeOutput").textContent = this.zipcode;
        }
    };
    return petOwner;
};

    let state = {
        name: document.getElementById('name').value,
        petsname: document.getElementById('petsname').value,
        phonenumber: document.getElementById('phonenumber').value,
        email: document.getElementById('email').value,
        cityname: document.getElementById('cityname').value,
        zipcode: document.getElementById('zipcode').value
    };

    localStorage.setItem('name', state.name);
    localStorage.setItem('petsname', state.petsname);
    localStorage.setItem('phonenumber', state.phonenumber);
    localStorage.setItem('email', state.email);
    localStorage.setItem('city', state.cityname);
    localStorage.setItem('zipcode', state.zipcode);

    //let user = createPetOwner(state.name, state.petsname, state.phonenumber, state.email, state.cityname, state.zipcode);

   // user.render();

