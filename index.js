const express=require('express');
const port=8000;

//Connect to the database
const db=require('./config/mongoose');
const Tasks=require('./models/task_list');

const app=express();

//Set up view engine
app.set('view engine','ejs');
app.set('views','./views');
app.use(express.urlencoded());
app.use(express.static('assets'));


// Getting default page
app.get('/',function(req,res){
    return res.render('home');
});

app.listen(port,function(err){
    if(err){
        console.log("Error found",err);
    }
    console.log(`My Express Server is up and running on Port: ${port}`);
})