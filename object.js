const person={
    name:['chris','prince'],
    age:[24,54],
    bio:function(){    // bio: function() or bio()
     return (`${this.name[0]}, ${this.name[1]} is ${this.age[0]}, ${this.age[1]} years`);
     //return this.name[0] = this.age[0]
    }
};

console.log(person.name);
console.log(person.bio());
console.log(person["age"]); //alternative way to access "object properties" instead of (dot notation)
console.log("name");

//name and age are object properties
//bio() is object method

const details={};
details.name="John";
details.age=46;

console.log(details.name);

const list={   // object properties as object here object properties is name
    name:{
        first:"Raju",
        last:"Bob"
    }
};

console.log(list.name);
console.log(list.name.first);  
console.log(list.name.last);
console.log(list.name[0]); // here it had to be "list.name.first"

//setting object members
const things={
    name:["ravi","jaggu"],
    age:[23,25],
    23:'hi',
    'aspire-sys':'me',

};
function farewell(){

    console.log("Bye everybody "+this.name);//adding function 
    return 'end'
}
console.log(things.age[0]=24);//changing age value
console.log(things.age);
things["marks"]=[90,99];//adding one more object member
console.log(things);
things.farewell= farewell
console.log(things);
console.log(things.farewell());
console.log(things["aspire-sys"]);

things.details=function(){
    return("Hello");
}
console.log(things.details());
console.log(things);

const calculate="height"; 
const  calculateValue=1.6;
things[calculate]=calculateValue;
console.log(things);

function createPerson(name) {  //create many object using empty object
    const obj = {};
    obj.name = name;
     obj.introduceSelf = function () {
       console.log(`Hi! I'm ${this.name}.`);
     };
    return obj;
  }
  
  const salva = createPerson("Salva");
//salva.name;
salva.introduceSelf();
console.log(salva);
const frankie = createPerson("Frankie");
frankie.name='fra';
frankie.introduceSelf();
 console.log(frankie);

 const myObject = {
    city: "Madrid",
    greet() {
      console.log(`Greetings from ${this.city}`);
    },
  };
  
  myObject.greet(); // Greetings from Madrid
Object.getPrototypeOf(myObject);
  