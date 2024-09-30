const fs= require('fs');

const cleaner=(filePath)=>{
    fs.readFile(filePath,"utf-8",(err,data)=>{
        if(err){
            console.log(err);
        }
        let newData=data.replace(/\s+/g," ").trim();

        fs.writeFile(filePath,newData,"utf-8",(err)=>{
            if(err){
                console.log(err);
            }
            else{
                console.log(data);
            }
        });
        
    });
};

cleaner("a.txt");
