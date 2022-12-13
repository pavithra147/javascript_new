let carBrands=["Hyundai","Benz","Suzuki"];
let price;
price=(match)=>{
if(match==carBrands[0]){
    return `you selected ${carBrands[0]} car and price of this car will be Rs.3,00,000`;
}
else if(match==carBrands[1]){
   return `you selected ${carBrands[1]} car and price of this car will be Rs.10,00,000`;
}
else{
    return`you selected ${carBrands[2]} car and price of this car will be Rs.5,00,000`;
}
} 
console.log(price("Benz"));

//Syntatic Variation
//optional parentheses for single parameter
var num=a=>{
    console.log("number:",a);
}
num(100);

//if there is no requirement of parameters there is no need to give parameters and optional { } braces for single statement
var display=()=>{console.log("Arrow Function")};

//Arrow functions with default parameters
price=(def="Hyundai")=>{
    if(def==carBrands[0]){
        console.log( `you selected ${carBrands[0]} car and price of this car will be Rs.3,00,000`);
    }
    else if(def==carBrands[1]){
       console.log( `you selected ${carBrands[1]} car and price of this car will be Rs.10,00,000`);
    }
    else{
        console.log(`you selected ${carBrands[2]} car and price of this car will be Rs.5,00,000`);
    }
    } 
    price();

    //default value can be overwritten

    price=(def="Hyundai")=>{
        if(def==carBrands[0]){
            console.log( `you selected ${carBrands[0]} car and price of this car will be Rs.3,00,000`);
        }
        else if(def==carBrands[1]){
           console.log( `you selected ${carBrands[1]} car and price of this car will be Rs.10,00,000`);
        }
        else{
            console.log(`you selected ${carBrands[2]} car and price of this car will be Rs.5,00,000`);
        }
        } 
        price("Benz");

//Arrow functions with Rest Parameters
var option=(...args)=>{
   
    for(let i=0;i<args.length;i++){
       console.log("you pressed :",args[i]);

    }
}
option(1,2,3,4,5,6,7,8,9);
