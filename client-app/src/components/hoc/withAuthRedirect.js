import React from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from "react-redux";

export const withAuthRedirect = (Component)=> {

    class RedirectComponent extends React.Component {
        render(){
            if(this.props.user===false) return <Redirect to={"/Auth"}/>;


            return(

                <Component {...this.props}/>


            )






        }


    }



    let mapStateToPropsForRedirect = (state) => ({
    
        user:state.auth.user
    
    });
    
  let ConnectedAuthRedirectComponent = connect (mapStateToPropsForRedirect)(RedirectComponent);

    return ConnectedAuthRedirectComponent;





}