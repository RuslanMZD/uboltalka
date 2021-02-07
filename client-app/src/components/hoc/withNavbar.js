import React from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from "react-redux";
import 'materialize-css/dist/css/materialize.min.css';
import M from "materialize-css";
import {NavLink,Link} from "react-router-dom";


export const withNavbar = (Component)=> {

  
    class RedirectComponent extends React.Component {
       constructor(props){
           super(props)

           
       }

       

        componentDidMount(){
            
            console.log(this.props.user)
            document.addEventListener('DOMContentLoaded', function() {
                var elems = document.querySelectorAll('.sidenav');
                var instances = M.Sidenav.init(elems, {});
                     
              });

            
        
        }

        
       
        render(){
            let userData = {...this.props.user}
           
            if(this.props.user===false){


            return(

                <nav>  
       
                <div className="nav-wrapper">
                <div className="container">
              <NavLink to="#"><div className="brand-logo" >УБОЛТАЙКА</div></NavLink>
                  <a href="#"  data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">format_align_center</i></a>
                  <ul id="nav-mobile" className="right hide-on-med-and-down">
                  <li><NavLink to="/#">На Главную</NavLink></li>          
                        <li><NavLink to="/Auth">SignIn</NavLink></li> 
                    </ul>           
              
                  
                  <ul className="sidenav" id="mobile-demo">
                  <li><NavLink to="/#">На Главную</NavLink></li>   
                      <li><NavLink to="/Auth">SignIn</NavLink></li> 
                  </ul>       
                </div>
                </div>
                </nav>


            )}else if(userData.email==="ruslan.mzd@gmail.com"){
               
                return(
                <nav>  
                      
                <div className="nav-wrapper">
                <div className="container">
            <NavLink to="#"><div className="brand-logo" >УБОЛТАЙКА</div></NavLink>
                  <a href="#"  data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">format_align_center</i></a>
                  <ul id="nav-mobile" className="right hide-on-med-and-down">
                  <li><NavLink to="/#">На Главную</NavLink></li>          
                    <li><NavLink to="/Content">Контент</NavLink></li>
                    <li><NavLink to="/Redactor">Редактор</NavLink></li>
                    <li><a href="http://localhost:4000/api/logout">SignOut</a></li> 
                    </ul>           
            
                  
                  <ul className="sidenav" id="mobile-demo">
                  <li><NavLink to="/#">На Главную</NavLink></li>        
                  <li><NavLink to="/Content">Контент</NavLink></li>
                  <li><NavLink to="/Redactor">Редактор</NavLink></li>
                  <li><a href="http://localhost:4000/api/logout">SignOut</a></li>
                  </ul>       
                </div>
                </div>
                </nav>

                    )}else{
                        
                        
                        return(
                            <nav>  
       
                            <div className="nav-wrapper">
                            <div className="container">
                        <NavLink to="#"><div className="brand-logo" >УБОЛТАЙКА</div></NavLink>
                              <a href="#"  data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">format_align_center</i></a>
                              <ul id="nav-mobile" className="right hide-on-med-and-down">
                              <li><NavLink to="/#">На Главную</NavLink></li>          
                                <li><NavLink to="/Content">Контент</NavLink></li>
                                <li><NavLink to="/Redactor">Редактор</NavLink></li>
                                <li><a href="http://localhost:4000/api/logout">SignOut</a></li> 
                                </ul>           
                        
                              
                              <ul className="sidenav" id="mobile-demo">
                        <li><NavLink to="/#">На Главную</NavLink></li>        
                              <li><NavLink to="/Content">Контент</NavLink></li>
                              <li><NavLink to="/Redactor">Редактор</NavLink></li>
                              <li><a href="http://localhost:4000/api/logout">SignOut</a></li>
                              </ul>       
                            </div>
                            </div>
                            </nav>
                        )

                    }






        }


    }



    let mapStateToPropsForRedirect = (state) => ({
    
        user:state.auth.user,
        
    
    });
    
  let ConnectedAuthRedirectComponent = connect (mapStateToPropsForRedirect)(RedirectComponent);

    return ConnectedAuthRedirectComponent;





}