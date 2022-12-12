const sample="Good Morning";
const sample1='Welcome Everybody';
console.log(sample);
console.log(sample1);
// const sample2='She didn't respond';
// console.log(sample2);
console.log("To avoid this error use Escape Sequence");
const sample2='she didn\'t respond';
console.log(sample2);
console.log("concatenation using backtick character");
console.log("Example 1");
const name1="Priya";
const greeting=`Hello,${name1}`;
console.log(greeting);
console.log("Example 2");
const one="Hi,";
const two="How are you?";
const welcome=`${one}${two}`;
console.log(welcome);

console.log("Concatenation using +");
const wish="Hello";
const names="chris";
console.log(wish+","+names);

//finding length
console.log("finding length");
var string="Hello World";
console.log(string.length);
console.log(string[String.length-1]);
//slice method
console.log("slice");
console.log(string.slice(0,5));
//substring method
console.log("substring ");
const str = 'Mozilla';
console.log(str.substring(0,3));//(start,end)
//substring with length
console.log(str.substring(str.length-4));
//trim
console.log("trim");
const str1="   Hello  ";
console.log(str1.trimEnd());
//substr
console.log(str.substr(2,5));

//replace
console.log(str.replace("Mozilla", "Chrome"));

//indexOf
const tagline = 'MDN - Resources for developers, by developers';
const first=tagline.indexOf('developers');
const second=tagline.indexOf('developers',first+1);
console.log(first);
console.log(second);
//toUppercase
const word="Good";
console.log(word.toUpperCase());
//includes
const file="Details";
console.log(file.includes("De"));

