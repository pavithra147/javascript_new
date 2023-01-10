//printing duplicate number from the array
const a=[1,5,5,4,6,7,2,2,3,7]
let answer=[];
answer=a.filter((num,index)=>{
   if(a.indexOf(num)!== index){
    return  answer.push(num);
   } 
})
console.log(answer);

let collect=[{
    name:'Giri',
    age:30
},{
    name:'Babu',
    age:26
}]

let result=collect.reduce((pre,curr)=>{
    return [...pre,...curr.name]
},[]);
console.log(result);

// var result=Object.values(collect);
// console.log(result);



//find given input is array or not
const arrayNot="number";
const ans=Array.isArray(arrayNot);  //"Array.isArray()" Static property of the javascript array object
console.log(ans);

const arr=[3,4,5];
const res=Array.isArray(arr);
console.log(res);


//clone of an array
var clone=function(input){
    return input.slice(0);
}
console.log(clone([3,9.5,6.5,0]));

//To get first element of an array
// var first=function(arr,n){
//     if(arr == null)
//      return "Hello";
//      if(n == null)
//      return arr[0];
//      if(n <0)
//      return [];

//     return arr.slice(0,n);
    
// }

// console.log(first[12,3,4,6])


var first =  function(array, n) {
   
  if (n == null) 
    return array[0];
  if (n < 0)
    return "Hello";

  return array.slice(0, n);
};

console.log(first([2,4,5],-2));
console.log(first([4,6]))
