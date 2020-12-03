const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
        required: true
    },
    deadline: {
        type: Date
    },
    done: {
        type: Boolean,
        default: false
    }
})

mongoose.model('Task', TaskSchema)