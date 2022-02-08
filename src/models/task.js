const mongoose = require('mongoose')

const uri = "mongodb+srv://SeshaSai:vNQkaGai9vnE8kmB@cluster0.og1cb.mongodb.net/task-manager-api";
mongoose.connect(uri, {
    useNewUrlParser: true
})

const Task = mongoose.model('Task', {
    description: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
})

module.exports = Task