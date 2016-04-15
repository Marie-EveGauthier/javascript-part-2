//This function creates a new person and it gives it an email address using constructor

function Person(firstName, lastName ) {
   this.firstName = firstName;
   this.lastName = lastName;
   this.emails = [];
}

function Email(address, type) {
    this.address = address;
        if (type === "work" || type === "home") {
             this.type = type;
        }
        else {
             this.type = "other";
        }
}


var person1 = new Person("Marie-Eve", "Gauthier");
person1.emails.push(new Email("marie.eve.gauthier@hotmai.com", "home"));

console.log(person1);
