const mongoose = require("mongoose");
const Schema = mongoose.Schema;



const SlideSchema = new Schema({

    slide:{
     
        mainText:{
               type:String,
               required:true

            },
        idSlide:{
            type:String,
            required:true
           }, 
           
           
        buttonsData:[{}]
    
          
    
    }
});
    
    const Slide =mongoose.model("slide", SlideSchema);
    
    module.exports = Slide;
    
    

    