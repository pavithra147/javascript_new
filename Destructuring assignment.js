//It is used to unpack the values of arrays or properties of object into a distinct variable
const names=["Ramesh","Raju","Priya","Bhuvi"];
const [first,second]=names;   //instead of using index we using variables to access that values in an array
console.log(first);
console.log(second);

//or
const [third,forth]=["ramesh","raju","vicky"];
console.log(third);

//if you want to access  first item, last item means
const [one,,three]=['a','b','c'];   //to skip items comma separator is using
console.log(one);
console.log(three);

//for access middle and last item
const [,a,,b]=['1','2','3','4'];
console.log(a);
console.log(b);

//to access group of items in array
const [product,...create]=['one','two','three','four'];
console.log(product);
console.log(create);

//destructuring assignment with functions
function array(){
    return['one','two','three'];
}
let [string1,string2]=array();
console.log(string1);
console.log(string2);

//swapping values using destructuring assignment
var p=4;
var q=8;
[p,q]=[q,p];
console.log('p:',p);
console.log('q:',q);

//object destucturing
const products={product1:'car',price:'rs.1,00,000'};
const {product1,price}=products;  //assigned variable in left side is want to be same as property in the object products
console.log("product:",product);
console.log("price of the product:",price);

//
const votingList={men:100,women:80};
let men,women;
({men,women}=votingList);//it has to be mention like this

//using new variable name other then using property in object
let {men: noofmen, women: noofwomen}=votingList;
console.log(noofmen);
console.log(noofwomen);

//Add new variable and default value
const {total=180}=votingList;
console.log(noofmen, noofwomen, total);
console.log(votingList);


// for function parameter in object
const user={
    name:'chris',
    age:24,
    mailId:'abc@gmail.com' 
};
const result=details(user);
function details({name,age}){
    console.log(`${name} is ${age} years old`)
}

const updated={...user,age:34};
console.log(updated);
console.log(user);

const employee = { 
    'name': 'Alex',
    'address': '15th Park Avenue',
    'age': 43,
    'department':{
        'name': 'Sales'
    }
};

const answer={...employee,department:{phonenumber:7888777476}};
let {phoneno=6878732632}=employee;
console.log(employee);
console.log(answer);
