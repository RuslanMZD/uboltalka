import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from "materialize-css";
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter,Route,Switch,Redirect } from 'react-router-dom';
import Redactor from './components/Redactor/Redactor';

const App=()=>{

return(
    <BrowserRouter>
<div className="container">
    <Navbar/>
   


<Switch>
<Route path="/Redactor" render={()=><Redactor/>} />

</Switch>



</div>
</BrowserRouter>
)


}

export default App;