//for..of 
const animals=['leopard','Hippopothamus','Giraffe'];
for(animal of animals){
    console.log(animal);
}
//map
function toUpper(string)
{
    return string.toUpperCase();
}
const items=animals.map(toUpper);
console.log(items);
//looping through collections with for loop
for(let i=0;i<animals.length;i++){
    console.log(animals[i]);
}