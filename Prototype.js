//Prototype
//object.prototype.toString()
function schoolDetails(studentName, studentID){
    this.studentName=studentName;
    this.studentID=studentID;
}
schoolDetails.prototype.marks=100;
const lilly=new schoolDetails('lilly',21);
console.log(lilly.marks);
// const sample=Object.create(schoolDetails);//Object.create()
// sample.studentName="vicky";
// sample.studentID=22;
// console.log(sample);
// console.log(schoolDetails);

schoolDetails.prototype.toString=function lillytoString(){
    return (`${this.studentName} and ${this.studentID}`);

}
console.log(lilly.toString());


//object.prototype.hasOwnProperty
const list={};
list.name="priya";
console.log(list.hasOwnProperty('name'));
console.log(list.hasOwnProperty('value'));

//Object.values and Object.keys
const object1 = {
    a: 'name',
    b: 42,
    c: false
  };
  
  console.log(Object.keys(object1));
  console.log(Object.values(object1));


