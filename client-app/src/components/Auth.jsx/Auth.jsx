import React,{useEffect} from 'react';
import {NavLink} from "react-router-dom";
import * as axios from 'axios';
import 'materialize-css/dist/css/materialize.min.css';
import {connect} from "react-redux";
import {getUserThunkCreater} from '../../store/auth-reducer';
import {authAPI} from '../../api/api';


const Auth=(props)=>{


useEffect(()=>{
    props.getUserThunkCreater()
},[])



   


    return(
        <>
      
        <div className="container center-align">
      
        <h1>Авторизация</h1>
        <div className="row">
        <div className="col s12">
     
      
      
        </div>

        </div>
       <div className="row">
<div className="col s12">
<a href="/auth/google" className="waves-effect waves-light btn pink"><i className="material-icons left">cloud</i>SIGNUP WITH GOOGLE</a>
</div>
       </div>
      


        </div>
        </>
    )
}

let mapStateToProps=(state)=>({

    user:state.auth.user
     
     
     })
   
    

export default  connect(mapStateToProps,{getUserThunkCreater})(Auth);