//  start writing from here

const express = require ("express")
const jwt = require("jsonwebtoken")
const path = require("path");
const app = express();

const users=[];
const SECRET_KEY="Hardik"

app.use(express.json())

app.get("/", (req, res) => {
    res.redirect("/signup"); // Redirects to the signup page
});

app.use(express.static(path.join(__dirname ,"..","..","frontend")));



function auth(req,res,next){
    const token= req.headers.token
    const decodedData = jwt.verify( token , SECRET_KEY);
    const foundUser = users.find(user=> user.username === decodedData.username)

    if(!foundUser){
        res.status(402).send({
            message:"Invalid User"
        })

    }else{
        req.username=foundUser.username;
        next();
    }

}


app.get("/signup",(req,res)=>{
    
    res.sendFile(path.join(__dirname,"..","..", 'frontend', 'signup.html'));

    
})
app.get("/signin",(req,res)=>{
    
    res.sendFile(path.join(__dirname,"..","..", 'frontend', 'signin.html'));

    
})

app.post("/signup",(req,res)=>{
    const username = req.body.username
    const password = req.body.password

    users.push({
        username : username,
        password : password
    })

    res.send({
        message:"Signed up successfully"
    })

})

app.post("/signin",(req,res)=>{
    const username = req.body.username
    const password = req.body.password

    const foundUser = users.find(user=> user.username === username && user.password === password )
    if(!foundUser){
        res.send({
            message:"User Not Found"
        })
    }else{
        const token = jwt.sign({
            username : username,
            password : password
        }, SECRET_KEY);

        foundUser.token=token;
        res.header("jwt",token);
        res.send({
            message:"Signed in Successfully", 
            username : username,
            token: token
        })
    }
})
app.post("/me",auth,(req,res)=>{
    const curentUser =req.username;

    const foundUser= users.find(user=> user.username === curentUser)
    if(foundUser){
        res.send({
            username: foundUser.username,
            password : foundUser.password
        })
    }

})

app.listen(3000);