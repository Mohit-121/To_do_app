//Require the library
const mongoose=require('mongoose');

//Connect to the database
mongoose.connect('mongodb://localhost/task_list_db');

//Acquire the connection to check success
const db=mongoose.connection;

//Error
db.on('error',console.error.bind(console,'error connecting to db'));


//On success
db.once('open',function(){
    console.log('Successfully connected to database');
});