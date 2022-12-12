//call back function
function studentDetails(details){
 console.log(details);
}
function pass(name,mark,studentDetails){
    this.name=name;
    this.mark=mark;
    studentDetails(`My name is ${name} and  ${mark} is my mark`);

}
pass("Liya",88,studentDetails);  //studentDetails is callback function and it is passes as an argument to pass() 

//Using setTimeOut()
//waiting for timeout()
function demoFunction(){
    console.log("Using setTimeOut");
}
setTimeout(demoFunction,4000);
   //or
   function greet(name, myFunction) {
    console.log('Hello world');

    
    myFunction(name);
}


function sayName(name) {
    console.log('Hello' + ' ' + name);
}

// calling the function after 2 seconds
setTimeout(greet, 2000, 'John', sayName);


//Waiting for Intervals
// function myFunction(){
//     let day= new Date();
//     console.log(day.getHours());
//     console.log(day.getMinutes());
//     console.log(day.getSeconds());

// }
// setInterval(myFunction, 1000);

      

