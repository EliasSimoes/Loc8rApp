var mongoose = require('mongoose');
var readline = require('readline');
var gracefulShutdown;

/*Connection status*/
var dbURI = 'mongodb://localhost/loc8r';
var mainDB = mongoose.createConnection(dbURI);

mainDB.on('connected', function(){
    console.log('Mongoose connected to ' + dbURI);
});

mainDB.on('error', function(err){
    console.log('Mongoose connection error: ' + err);
});

mainDB.on('disconnected', function(){
    console.log('Mongoose disconnected');
});



/*listeners*/
gracefulShutdown = function(msg, callback){
    mongoose.connection.close( function(){
        console.log('Mongoose disconnected through ' + msg);
        callback();
    });
};

if (process.platform === "win32"){
    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    rl.on ("SIGINT", function(){
        process.emit("SIGINT");
    });
};

process.once('SIGUSR2', function(){
    gracefulShutdown('nodemon restart', function(){
        process.kill(process.pid, 'SIGUSR2');
    });
});

process.on('SIGINT', function(){
    gracefulShutdown('app termination', function(){
        process.exit(0);
    });
});

process.on('SIGTERM', function(){
    gracefulShutdown('Heroku app shutdown', function(){
        process.exit(0);
    });
});
