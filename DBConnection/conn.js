const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://Timmy:Asdfvbnm@cluster0.zgjdnzy.mongodb.net/user?retryWrites=true&w=majority")
.then(() => {
    console.log("Connected Succesfully.....")
}).catch(err => {
    console.log("Connection unsuccessful .....")
    consol.log(err)
});

