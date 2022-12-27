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



let first =val =>new Promise((resolve, reject)=> { 
    setTimeout(()=>{
        resolve(val+20)},1000);
    
    setTimeout(()=>{
        reject(val+10)},10);
    });

    

first(1).then(a=>a+20).catch(console.log)

//methods
let second= new Promise((resolve,reject)=>{
    setTimeout(()=>{
       return  resolve("success")},1000);
    });

let third= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        // reject("failure")},1000);
        return resolve("successfull")},10);
    

});

// Promise.all([second,third]).then(console.log).catch(console.log)  //all method execute after all promise got "resolved" it will print array of values
Promise.allSettled([second,third]).then(console.log).catch(console.log) // it will give each individual response
// Promise.race([second,third]).then(console.log).then(console.log) //if multiple request is given ,which request's response is executing first that response will execute then other response will not execute




