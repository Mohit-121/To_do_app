const mongoose = require('mongoose');

const taskListSchema = new  mongoose.Schema({
    description:{
    type: String,
    required: true
    },
    category:{
        type: String,
    },
    deadline:{
        type:Date
    }
});

const Tasks = mongoose.model('Tasks',taskListSchema);

module.exports=Tasks;