let promise =new Promise((resolve,reject)=>{
    setTimeout(function(){
        reject("Hello")},2000)
    
    
});
async function example(){
    let result =await promise;
  // console.log(result);
  // console.log("welcome");
  try{
    console.log(result);
  }
  catch{
     console.log(reject(result));
  }
}
example();
