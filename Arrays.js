console.log("Creating Arrays");
const list=['Apple','Banana','Carrot',3];
console.log(list);
console.log("Finding length of an array");
console.log(list.length);
console.log("Accessing an array item");
console.log(list[2]);
console.log("Modifying Array Item");
list[3]='Dog';
console.log(list);
console.log("Array inside an array");
const random=['Ball','Key',[2,3,5]];
console.log(random[2][1]);
console.log("Finding Index of an item");
const birds=['Sparrow','Parrot','Owl'];
console.log(birds.indexOf('Sparrow'));
console.log(birds.indexOf('Peacock'));
console.log("Adding an item in the end");
const numbers=['one','two','three'];
numbers.push('four');
console.log(numbers);

console.log("Adding an item in the starting of an array");
numbers.unshift('zero');
console.log(numbers);
console.log("Removing an Last item in an array");
const animals=['Lion','Elephant','Tiger'];
const removedItem =animals.pop();
console.log(animals);
console.log(removedItem);
console.log("Removing Starting item in an array");
const things=['Pen','Paper','Scale'];
things.shift();
console.log(things);
console.log("removing item with index number using splice method");
things.splice(things.indexOf('Paper'),1); //in this first argument indicates where to start removing items and second arguments says how many items should be removed
console.log(things);
console.log("Accessing every item using for...of statement");
const pets=['Dogs','Cats','Parrot'];
for (const pet of pets){
    console.log(pet);
}
console.log("Accessing every item using map()");
function double(number){
    return number*2;

}
const number=[2,4,6,8];
const doubled=number.map(double);//it calls function once for each item in the array,passing in the item. It then adds the value from each function call to a new array

console.log(doubled);
console.log("Accessing item using filter()");
function great(city){
    return city.length>8;
}
const city=['London','Liverpool','Totnes'];
const greater=city.filter(great);//calls function for every item. filter method is used to create new array containing only the items in the original array that match some test
console.log(greater);
console.log("split()");

const num= "one,two,three,two,three,two,three,two,three,two,three";
const newnum = console.log(num.split(','));//string to array
//join()
const numb=['one','two'];//array to string
const joinMethod=console.log(numb.join(','));
//toString
const string=console.log(numb.toString());//array to string
//sort
const months=['jan','feb','march','april'];
months.sort();
console.log(months);
const array=[1,3,45,100];
array.sort();
console.log(array);
//slice
const animal=['bison','camel','tiger','lion'];
console.log(animal.slice(2));
console.log(animal.slice(1,4))//first argument says starting and second arguments says upto which index
console.log(animal.slice(-2));

//reverse()
const array1=['four','five','six'];
array1.reverse();
console.log(array1);
//splice
 var arr=[1,2,4,5];
arr.splice(2,0,3); //index of element which we going to add  that as given as first argument and in second argument after the index how many element going to remove will give and in third argument which element we  going to add that can give

console.log(arr);

const fruits = [];
fruits.push("banana", "apple", "peach");
console.log(fruits.length); 
fruits[6]="orange";
console.log(fruits);
console.log(Object.keys(fruits));
fruits.length=10;
console.log(fruits);
console.log(fruits[5]);
console.log(fruits[1]);

//every
let i;
let store=[];
for(i=0;i<10;i++){
    store.push(i);
}
console.log(store);
const check=(currentValue)=>currentValue<5;
console.log(store.every(check,6));//



const Numarray=[1,2,4,2,1,3];



// let result=[];
//  result=arrayElement.find (repeat);
//  function repeat(element){
//     for(let i=0; i<arrayElement.length;i++){
        
//     }
//  }
//  console.log(result);
const res =[1,2,3];
let answer=res.reduce((num,num1)=>{
   return num + num1;
})
console.log(answer);

//reduce() - this method executes a reducer function on each element of the array and returns the single value
const contain=["Hello"," ","Everybody"];
let arr1=contain.reduce((a,b) =>{
    return a+b;
})
console.log(arr1);


 


