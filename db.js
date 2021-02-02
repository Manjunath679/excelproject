const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://manjunath:msmv1234@cluster0.b6x1z.mongodb.net/Data?retryWrites=true&w=majority",{useUnifiedTopology:true,useNewUrlParser:true
}).then(()=>{
    console.log('database connected');