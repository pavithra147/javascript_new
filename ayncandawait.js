let promise =new Promise((resolve,reject)=>{
    // setTimeout(function(){
    //     resolve("Hello")},2000)
    var a=10;
        if(a>5){
          setTimeout(()=>{
             resolve("a is greater")},1000)
          }
          else{
            setTimeout(()=>{
              reject("a is smaller")},1000)
          }
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
