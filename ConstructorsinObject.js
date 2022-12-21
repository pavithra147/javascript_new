//creating objects using "constructor"
function purpose(name,age){
    this.name=name;
    this.age=age;
    this.introduceSelf=function(){
        return("Hello everybody");
    }
}
/*we can't add new property to an existing constructor*/
// purpose.year=2000;
// console.log(viji.year);
//But using  (prototype) property we can add new "properties " and "methods"
purpose.prototype.year=2000;
//purpose.prototype.measure=calculate();
const viji=new purpose("viji",23);
//viji.name;
console.log(viji.introduceSelf());
console.log(viji);
console.log(viji.year);
const vishnu=new purpose("vishnu",24);
console.log(vishnu.introduceSelf());
console.log(vishnu);

