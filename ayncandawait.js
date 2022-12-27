let promise =new Promise((resolve,reject)=>{
    setTimeout(function(){
        resolve("Hello")},2000)
    
        
      
    
});
async function example(){
  
  try{
    let result =await promise;
    console.log(result);
    console.log("Welcome");
  }
  catch{
     console.log("error");
  }
}
example();
