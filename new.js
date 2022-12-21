let a='My name is Aditya'
 console.log(a.split(' ' ).reverse().join(' '));
    
 let b=[1,4,2,5,22,45,7,7,2,2,6];

 let result=[];
 result=b.filter((num,index)=>{
    if(b.indexOf(num)==index){     //indexOf() of one element gives the same index for repeatance of that number,
                                   //whether  the index gives different index
      return  result.push(num);
    }
   
 });
 console.log(result);

// let result=new Set(b);
// console.log(result);
  
// let res=[...result];  // spread operator
// console.log(res);
myfunction =function(a,b){
   console.log(a===b);

};
myfunction(2,3);
myfunction(3,3);
myfunction(1,'1');
myfunction('10','10');




