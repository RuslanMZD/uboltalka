const express = require ('express');
const router = express.Router();
const Slide = require('./modelSlide');


router.post('/add', (req,res)=>{

console.log(req.body.mainText)
console.log(req.body.idSlide)
console.log(req.body.buttonsData)



// if(req.body.mainText.length && req.body.idSlide.length>4){
    
    let slideToDB = new Slide({

    


        slide:{
           mainText:req.body.mainText,
           idSlide:req.body.idSlide, 
           buttonsData:req.body.buttonsData 
        }
           
   
                 
                              });



                              slideToDB.save((err, slide) => {
                                if (err) {
                                console.log('err', err)
                                res.json({mess:"Slide NO ADD"})
                                }else{
                                    res.json({mess:"Slide ADD"})
                                console.log('Slide ADD', slide)
                                }
                                 
                                })


// }
// res.json({mess:"Slide NO ADD"})
    


   
                            

    });




module.exports=router;