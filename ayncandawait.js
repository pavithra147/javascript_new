let promise =new Promise((resolve,reject)=>{
    setTimeout(function(){
        resolve("Hello")},2000)
    
});
async function example(){
    let result =await promise;
  console.log(result);
  console.log("welcome");
}
example();
