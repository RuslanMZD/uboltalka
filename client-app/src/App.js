import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from "materialize-css";
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter,Route,Switch,Redirect } from 'react-router-dom';
import Redactor from './components/Redactor/Redactor';
import Content from './components/Content/Content';
import Reg from './components/Registr/Reg';
import Auth from './components/Auth.jsx/Auth';
import Profile from './components/Profile/Profile';
import {getUserThunkCreater} from './store/auth-reducer';
import {connect} from "react-redux";
const App=(props)=>{

    React.useEffect(()=>{
        props.getUserThunkCreater()
    },[])


return(
    <BrowserRouter>
<div className="container">
    <Navbar/>
   


<Switch>
<Route path="/Profile" render={()=><Profile/>} />
<Route path="/Reg" render={()=><Reg/>} />
<Route path="/Auth" render={()=><Auth/>} />
<Route path="/Redactor" render={()=><Redactor/>} />
<Route path="/Content" render={()=><Content/>} />
</Switch>



</div>
</BrowserRouter>
)


}


let mapStateToProps=(state)=>({

    user:state.auth.user
     
     
     })
   
    

     export default connect(mapStateToProps,{getUserThunkCreater})(App);

