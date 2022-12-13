//create promise
//syntax

    //promise() constructor takes a function as an argument
//and the function accepts two function
/* If the promise returns successfully, resolve() function is called.
/* If it error occurs reject() function will be called.*/
const age=23;
let promise=new Promise(function(resolve, reject){
    if(age<18){
        resolve("you are eligible to vote");
    }
    else{
        reject("you are not eligible to vote");
    }
});

promise.then(function(value){       // promise is three methods called promise chaining.They are (1)then()->it is used with the callback when promise is successfully fulfilled or resolved
    console.log(value);
}).catch(function notMatch(answer){                                                              //(2)catch()->it is used with callback when promise is rejected or if an error occurs.
    console.log("eligibility:",answer);                                                                         //(3)finally()
}).finally(function(){
    console.log("welcome to vote")
});


