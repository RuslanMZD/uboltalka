import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from "materialize-css";
import * as axios from 'axios';


import { BrowserRouter,Route } from 'react-router-dom';


const ButtonRedactor=(props)=>{

const [colorButton, setColorButton]=React.useState(null);


const ChangeColorButton=(event)=>{
console.log(event.target.value);
setColorButton(event.target.value)
}



return(

<div className="container">


<div className="row">

<div className="col s4">
<textarea className="buttonsArea" style={{backgroundColor:colorButton}}></textarea>
</div>


<div className="col s5 " >
    <div className="row">
<div className="col s6" >
<label>
        <input name="group1" type="radio" value="#D78100" onClick={ChangeColorButton} />
        <span>Оранжевый</span>
      </label>
        
    
      <label>
        <input name="group1" type="radio" value="#8DBE3D"  onClick={ChangeColorButton}/>
        <span>Зеленый</span>
      </label>
</div>


<div className="col s6" >
<label>
        <input name="group1" type="radio" value="#4AA8BD"  onClick={ChangeColorButton}/>
        <span>Конец</span>
      </label>


      <label>
        <input name="group1" type="radio" value="#B3E6E9"  onClick={ChangeColorButton}/>
        <span>Голубой</span>
      </label>
</div>

    </div>
 </div>



<div className="col s3 ">
    <div className="row">
    <div className="col s12 center-align"> Следующий слайд</div>
</div>
<div className="row center-align">
    <div className="col s4 center-align"> 
     
    <input placeholder="Placeholder" id="idHystory" type="number" className="validate idSlide" />
    </div>
    <div className="col s4 center-align">
    <input placeholder="Placeholder" id="idHystoryLine" type="number" className="validate idSlide" />
    </div>
    <div className="col s4 center-align">
    <input placeholder="Placeholder" id="idSlideLine" type="number" className="validate idSlide" />
    </div> 
    <div className="row">
    
 
    </div>
 
</div>
<div className="row">
    <div className="col s6">
    <button className="btn-floating tooltipped ' btn-large waves-effect waves-light green" data-position='left' data-tooltip='Добавить вариант'><i class="material-icons">check</i></button>
   
    </div>

    <div className="col s6">
    
    <button className="btn-floating tooltipped  btn-large waves-effect waves-light red"  data-position='right' data-tooltip='Удалить вариант'><i class="material-icons">clear</i></button> 
    </div>
</div>

</div>










</div>
</div>


)


}

export default ButtonRedactor;