//Domain: Banking
//operations: credit ,debit
//business Entity: Account
//Rules:constraints, policy
//Events against account 

//Account:
     //state: Balance
     //operations: withdraw, deposit
     //rule:Balance threshold
     //events:underbalance, overbalance

//classical javascript syntax
// soc :separation of concerns

// loosely coupled , highly cohesiv
 
var handlers=require("./handler"); //importing the module , custome module
var event = require("events"); //built in module available in node js


var emitter=new event.EventEmitter(); //creating an instance of event emitter


var Account = function(amount) {    
    var balance = amount;

    //inner function
    var getBalance = function() {
        return balance;
    };

var monitor = function() {
    if (balance < 5000){
        
        
        //handlers.blockAccount();
        //emit(trigger) event underbalance
        emitter.emit("underBalance");
    }
    else if(balance>=250000){
       // handlers.payIncomeTax();
       //emit(trigger) event underbalance
       emitter.emit("overBalance");
    }
};

var withdraw = function(amount) {
  balance=balance - amount; 
  monitor();   
};
var deposit = function(amount) {
  balance=balance + amount; 
  monitor();
};
return{
    receiveBalance:getBalance,
    debit:withdraw,
    credit:deposit
    }
 }
                                  //code looks object oriented
  

//acct123 is an instance (object) of Account
//events are associated with instance(objects)

//step1 : configuration,Initialization
//register EventHandlers with event using emitter object
emitter.on("underBalance", handlers.blockAccount);
emitter.on("underbalance", handlers.sendEmail);
emitter.on("underbalance", handlers.sendSMS);
emitter.on("overBalance", handlers.payIncomeTax);

//step 2: create objects
var acct123=new Account(5500);  //creating an instance
 
acct123.debit(520000);
var data=acct123.receiveBalance(); // invoking member function
console.log("Balance is: " + data);