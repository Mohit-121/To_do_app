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


// Getting default home page
app.get('/',function(req,res){

    // Find the tasks from the database
    Tasks.find({},function(err,tasks){
        if(err){
            console.log('Error in fetching results from db');
            return;
        }
        return res.render('home',{
            tasks:tasks
        });
    });
});

//Add task
app.post('/create-task',function(req,res){
    // console.log(req.body);
    Tasks.create({
        description:req.body.description,
        category:req.body.category,
        deadline:req.body.date
    },function(err,newTask){
        if(err){
            console.log('Error in creating Task!',err);
            return;
        }
        // console.log('******',newTask.category);
        return res.redirect('back');
    });
});

// Delete task
app.post('/delete-task',function(req,res){
    let key=Object.keys(req.body);
    for(let i=0;i<key.length;i++){
        Tasks.findByIdAndDelete(key[i],function(err){
            if(err){
                console.log("No such task found!!!");
                return;
            }
        });
    }
    return res.redirect('back');
});

app.listen(port,function(err){
    if(err){
        console.log("Error found",err);
    }
    console.log(`My Express Server is up and running on Port: ${port}`);
})