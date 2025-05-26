var fs = require('fs');
var filename="./data/result.txt";

var dataToBeWritten="This data is written by  nodejs application";

var onFileWrite=function(err){
    if(err){
        throw err;
    }
    console.log("content has been written to file");
};

//first parameter: path of the file
//second parameter: data to be written
//third parameter: callback function name, which will be called automatically 
//after write operation is done by system

fs.writeFile(filename,dataToBeWritten,onFileWrite);


console.log("Nodejs application about to be terminated");