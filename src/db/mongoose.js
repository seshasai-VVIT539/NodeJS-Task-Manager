const mongoose = require('mongoose')

const uri = "mongodb+srv://SeshaSai:vNQkaGai9vnE8kmB@cluster0.og1cb.mongodb.net/task-manager-api";
mongoose.connect(uri, {
    useNewUrlParser: true
})