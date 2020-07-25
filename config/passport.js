const config =require('./db');
const GoogleStrategy=require('passport-google-oauth20').Strategy;
const passport = require("passport");
const mongoose =require('mongoose');
const User =require('../router/modelUser');



passport.serializeUser((user,done)=>{
    done(null,user.id);
});

passport.deserializeUser((id,done)=>{
    User.findById(id).then((user)=>{
        done(null,user)
    });
});


passport.use(
    new GoogleStrategy({
        clientID:config.GOOGLE_CLIENT_ID,
        clientSecret:config.GOOGLE_CLIENT_SECRET,
        callbackURL:"/auth/google/callback"
    },
    (accessToken, refreshToken, profile, done)=>{
        // console.log("ЭТОООО accessToken ЭТОООО", accessToken)
        // console.log("ЭТОООО refreshToken ЭТОООО", refreshToken)
        // console.log("ЭТОООО profile ТОКЕ ЭТОООО", profile) 
        // console.log("ЭТОООО cb ЭТОООО", cb)
       // ,email:profile.emails[0].value
        User.findOne({googleId:profile.id}).then(currentUser=>{
            if(currentUser){
                console.log(currentUser+" такой пользователь есть")
           done(null,currentUser)
            }else{
                new User({googleId:profile.id,email:profile.emails[0].value}).save().then((user)=>{
                    console.log(user+" Создание новго пользователя")
                 done(null, user)
                })
            }
        })
       
}

    
    )
  
)
