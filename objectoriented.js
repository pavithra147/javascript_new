//class
class Car{
    constructor(name,price){
        this.name=name;
        this.price=price;
    }
}
let mycar=new Car("ford",50000);
console.log(mycar);
console.log(mycar.name);
console.log(mycar.price);  

class Person {

    
  
    constructor(name) {
      this.name = name;
    }
     introduceSelf=function() {
      console.log(`Hi! I'm ${this.name}`);
    
  
  }
}
const files=new Person("Priya");
files.introduceSelf();
console.log(files);
  
class Student extends Person {

    #year;
  
    constructor(name, year) {
      super(name);
      this.#year = year;
    }
  
  
    introduceSelf=function() {
      console.log(`Hi! I'm ${this.name}, and I'm in year ${this.#year}.`);
    }
  
    canStudyArchery() {
      return this.#year >1;
    }
  
  }
  
  const summers = new Student('Summers', 2);

summers.introduceSelf(); // Hi! I'm Summers, and I'm in year 2.
console.log(summers.canStudyArchery()); // true
console.log(summers.year);

//ummers.#year; // SyntaxError
