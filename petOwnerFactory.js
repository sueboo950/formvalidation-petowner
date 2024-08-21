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
            let pOwnerFname = document.getElementById("nameOutput");
            pOwnerFname.textContent = this.name;
            let petsName = document.getElementById("petsNameOutput");
            petsName.textContent = this.pets;
            let phoneNumber = document.getElementById("phoneNumberOutput");
            phoneNumber.textContent = this.phone;
            let eMail = document.getElementById("emailOutput");
            eMail.textContent = this.email;
            let cIty = document.getElementById("cityOutput");
            cIty.textContent = this.city;
            let zipCoDe = document.getElementById("zipCodeOutput");
            zipCoDe.textContent = this.zipcode;
        }
    };
    return petOwner;
}

let p = createPetOwner("Sophia", "Creole", 9855225222, "sueboo000yahoo.com", "Covington", 70444);
console.log(p);
p.status();

