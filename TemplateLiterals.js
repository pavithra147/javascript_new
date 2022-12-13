//syntax of template literals
let string=`Template Literals`;

//multiline strings
let message=`Multiline \n\ string`;  //this technique is not consistent
console.log(message);

//so
message=['using','template literals'].join('\n');
console.log(message);

//variable and expression substitution
let name='Bhuvi';
let str=`my name is ${name}`;
console.log(str);