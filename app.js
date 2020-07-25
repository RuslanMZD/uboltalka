const express =require('express');
const app =  express();
const cookieParser= require('cookie-parser')
const cors = require('cors');
const bodyParser = require('body-parser');
const session =require('express-session');
const mongoose = require('mongoose');
const port =4000;
const config =require('./config/db');
const GoogleStrategy=require('passport-google-oauth20').Strategy;
const passport = require("passport");
const cookieSession=require('cookie-session');


app.use(cookieSession({
    
    maxAge:30*24*60*60*1000,
    keys:["key123456789"]
}));



require('./config/passport');


app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());





// require('./router/modelUser');





require('./router/routerAuth')(app);
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