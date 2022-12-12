const a=null;   //null
console.log(typeof a);

//undefind
let b;
console.log(typeof b);

//null (function)
function add(x=1)
{
    console.log(x);
}
add(null);

//undefined(function)
function add(x=1)
{
    console.log(x);
}
add(undefined);

//comparing null and umdefined
console.log(null=== undefined); //strict
console.log(null == undefined);