const express = require("express");
const app = express();
app.get("/" , function(request , response){
    response.send("<h1>Hello</h1>");
}); 

app.listen(3000 , function(){console.log("server started on port 3000");});
