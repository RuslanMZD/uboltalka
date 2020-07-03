const mongoose = require("mongoose");
const Schema = mongoose.Schema;



const SlideSchema = new Schema({

    slide:{
     
        mainText:{
               type:String,
               minlength:1,
               required:true

            },
        idSlide:{
            type:String,
            minlength:5,
            required:true
           }, 
           
           
        buttonsData:[{}]
    
          
    
    }
});
    
    const Slide =mongoose.model("slide", SlideSchema);
    
    module.exports = Slide;
    
    

    