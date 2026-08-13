//class
class User {
    //constructor
    constructor(name, email, username, address) {
        this.name = name;
        this.email = email;
        this.username = username;
        this.address = address;
        this.role = "user";
    }
    //method
    show(text) {
        let h1 = document.createElement("h1");
        h1.textContent = `${this.name}: ${text}`;
        document.body.appendChild(h1);

        console.log(`this is a ${this.role}`);
    }
}

//classical inheritance
class Admin extends User {
    //this is Admin constructor
    constructor(name, email, username, address) {
        //it recieves all the parameters of the Parent class
        super(name, email, username, address);

        this.role = "admin";
    }

    //method of Admin only
    remove(){
        document.querySelectorAll("h1").forEach(function(elem){
            elem.remove();
        });
    }
}

//object
u1 = new User("laya", "laya@gmail.com", "layaaaa", "delhi");
u2 = new User("daya", "daya@gmail.com", "daayaa", "himachal");
a1 = new Admin("admin1", "admin@gmail.com", "adminnnnn", "uk");