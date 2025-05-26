var http= require('http');//step1
var fs= require('fs');//step2

var onRequestHandler=function(request,response){  //step 4
    var pathname=".//"+request.url;

    console.log(pathname);
    fs.readFile(pathname,(err,data)=>{                    //step 5
        if(err){
        console.log("something went wrong");
        console.log(err);
        response.writeHead(404,{'Content-Type':'text/html'});

        }
        else{
             response.writeHead(200,{'Content-Type':'text/html'});
             response.write(data.toString());

            }
    response.end();
    });
};


var server=http.createServer(onRequestHandler);   //step 3
server.listen(9898);                               //step 6
console.log("Server is listening on port 9898");