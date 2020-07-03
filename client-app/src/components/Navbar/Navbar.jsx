import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from "materialize-css";
import {NavLink} from "react-router-dom";

class Navbar extends React.Component{

    componentDidMount(){
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.sidenav');
            var instances = M.Sidenav.init(elems, {});
          });


     


     
    }


render(){
return(


    <nav>
    <div className="nav-wrapper">
    <div className="container">
{/* <a href="#" className="brand-logo"></a> */}
<NavLink to="#"><div className="brand-logo" >УБОЛТАЙКА</div></NavLink>

      <a href="#"  data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">format_align_center</i></a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
      <li><NavLink to="/#">На Главную</NavLink></li>               
        <li><NavLink to="/#">Регистрация</NavLink></li>
        <li><NavLink to="/#">Авторизация</NavLink></li>
        <li><NavLink to="/Content">Контент</NavLink></li>
        <li><NavLink to="/Redactor">Редактор</NavLink></li> 
        
        

      </ul>
      <ul className="sidenav" id="mobile-demo">
      <li><NavLink to="/#">На Главную</NavLink></li>
      <li><NavLink to="/#">Авторизация</NavLink></li>
        <li><NavLink to="/#">Регистрация</NavLink></li>
        <li><NavLink to="/Content">Контент</NavLink></li>
      <li><NavLink to="/Redactor">Редактор</NavLink></li>
      </ul> 
      
    </div>
    </div>
    </nav>



)


}
}
export default Navbar;