//this is a class in which this.property returns a blank object and variables from the parameters are assigned to it.
class CreatePencils {
    // constructor
    constructor(name,price, color,company){
        this.name = name;
        this.price = price;
        this.color = color;
        this.company = company;
    }
    //method
    write(text){
        let h1 = document.createElement("h1");
        h1.style.color = this.color;
        h1.textContent = text;
        document.body.appendChild(h1);
    }
    //method
    erase(){
        let h1 = document.querySelectorAll("h1");
        h1.forEach((elem)=>{
            if(elem.style.color === this.color){
                elem.remove();
            }
        });
    }
}

//objects showing the properties of class
//objects returns the object with given arguments.
let pencil1 = new CreatePencils("sharp", 10, "black", "doms");
let pencil2 = new CreatePencils("boldB", 10, "red", "nataraj");