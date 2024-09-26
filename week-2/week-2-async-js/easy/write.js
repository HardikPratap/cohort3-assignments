const fs = require("fs");

fs.writeFile("a.txt","Hello Again",(err)=>{
    if(err){

        console.log(err);
    } 
});

fs.readFile("a.txt","utf-8",(err,data)=>{
    console.log(data);
});
