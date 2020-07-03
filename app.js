const express =require('express');
const app =  express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const port =4000;
const config =require('./config/db');



app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use("/redactor",require('./router/routerRedactor'));
app.use("/content",require('./router/routerContent'));







mongoose.connect(config.db,
{ useNewUrlParser: true ,useUnifiedTopology: true });
mongoose.connection.on('connected',()=>{
    console.log("CONNECT BD");
}) 
mongoose.connection.on('error',(err)=>{
    console.log("ERROR CONNECT BD" + err);
}) 




app.listen(port,()=>{
    console.log(`SERVER UP ${port}` )
});