
const {urlencoded}=require('body-parser');
var express=require('express');
var path=require('path');
//var bodyParser=require('body-parser');
const app=express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());
//configure public folder as static folder to express module



var staticMiddleware=express.static(path.join(__dirname,"public"));
app.use(staticMiddleware);


//3 HTTP Request handlers
//how many get handlers: 1
// how many post handlers:2
app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.post("/login",(request,response) => {
    console.log(request.body);
    var user= request.body;
    //user credentials logic

    if (user.email== "shubhamchafekar@gmail.com" && user.password== "shubhya" ){
            console.log("valid user");
        }
     else{
         console.log("invalid user");

     }
    console.log("login form is posted by browser is received by server");
         
});

app.post("/register",(request,response)=>{
    console.log(request.body);
    console.log("register form is posted by browser is received by server")

});


app.listen(9000);
console.log("website is being hosted on port no 9000");