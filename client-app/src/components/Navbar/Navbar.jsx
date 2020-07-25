import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from "materialize-css";
import {NavLink,Link} from "react-router-dom";
import {connect} from "react-redux";
import {withNavbar} from "../hoc/withNavbar";
import {compose} from 'redux';

class Navbar extends React.Component{
  constructor(props){
    super(props)
  }

    componentDidMount(){
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.sidenav');
            var instances = M.Sidenav.init(elems, {});

            
       
          });
    
    }



  
render(){
  
    return(
  <>
  </>
   
  )

 

    
  










}
}


let mapStateToProps=(state)=>({

 user:state.auth.user
  
  
  })

export default compose(connect(mapStateToProps,null),withNavbar)(Navbar);