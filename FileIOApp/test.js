var fs=require('fs');
var fileName="./data/result.txt";

//callback function
var onFileRead=function(err,data){
    if(err){
        console.log("error in reading file");
        console.log(err);
        return;
    }
    console.log("data from file is available");
    console.log(data.toString());
}
fs.readFile(fileName,onFileRead);// non blocking call