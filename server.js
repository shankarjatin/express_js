const express = require("express");
const app = express();
app.get("/" , function(request , response){
    response.send("<h1>Hello</h1>");
}); 
app.get("/contact" , function (request,response){
    response.send("contact me at shankarjatin1005@gmail.com");
});
app.get("/about" ,function(request,response){
    response.send("this page is created by jatin shankar srivastava");
});

app.listen(3000 , function(){console.log("server started on port 3000");});
