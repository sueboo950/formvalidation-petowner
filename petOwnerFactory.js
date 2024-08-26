function createPetOwner(name, petsname, phonenumber, email, city, zipcode) {
    let petOwner = {
        name: name,
        pets: petsname,
        phone: phonenumber,
        email: email,
        city: city,
        zipcode: zipcode,
        status: function () {
            console.log(`Name: ${this.name} Pet's Name: ${this.pets} Phone Number: ${this.phone} 
                Email: ${this.email} City: ${this.city} Zip Code: ${this.zipcode}`);
        },
        render: function() {
            document.getElementById("nameOutput").textContent = this.name;
            document.getElementById("petsNameOutput").textContent = this.pets;
            document.getElementById("phoneNumberOutput").textContent = this.phone;
            document.getElementById("emailOutput").textContent = this. email;
            document.getElementById("cityOutput").textContent = this. city;
            document.getElementById("zipCodeOutput").textContent = this. zipcode;
        }
    };
    return petOwner;

}
let p = createPetOwner("Sophia", "Creole", 9855225222, "sueboo000yahoo.com", "Covington", 70444);
console.log(p);
p.status();

