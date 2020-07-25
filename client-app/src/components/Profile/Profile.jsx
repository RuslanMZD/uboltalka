import React from 'react';
import {NavLink} from "react-router-dom";
import * as axios from 'axios';
import {connect} from "react-redux";
import { compareSync } from 'bcrypt-nodejs';


const Profile=(props)=>{

const user={...props.user};

// for (let key in props.user){
//    user={key:props.user[key]}
// }

// console.log(user.email)

    return(
   
        <div className="container center-align">
        Личная Кабина 
      
        

        </div>
       
    )
}


let mapStateToProps=(state)=>({

    user:state.auth.user
     
     
     })
   
 

export default connect(mapStateToProps,null) (Profile);