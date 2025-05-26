//module : modularity....event handling module
//event listners
//expose functions to be used outside of javascript file

exports.payIncomeTax=function(){
    console.log("20% tax will be applied against the account");
}

exports.payServiceTax=function(){
    console.log("18% service tax will be applied against the account");
}

exports.blockAccount=function(){
    console.log("Account is blocked temporarily");
};

exports.sendEmail=function(){
     console.log("The Account has been blocked temporarily, Email has been sent to the Registered Email ID");
}

exports.sendSMS=function(){
     console.log("The Account has been blocked temporarly, SMS has been sent to the Registered Email ID");
}