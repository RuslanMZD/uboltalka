import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from "materialize-css";
import * as axios from 'axios';


import { BrowserRouter,Route } from 'react-router-dom';
import { PureComponent } from 'react';


const ButtonRedactor=(props)=>{




let idHystory = React.createRef();
let idHystoryLine = React.createRef();
let idSlideLine =React.createRef()

  


const nextIdButton=()=>{
  let idSlide=null
if(idHystory.current.value>0 &&idHystoryLine.current.value>0 && idSlideLine.current.value>0){
  idSlide=`${idHystory.current.value}_${idHystoryLine.current.value}_${idSlideLine.current.value}`;
  props.nextIdButtonsThunkCreater(props.index,idSlide)

}
   console.log(idHystory.current.value,idHystoryLine.current.value,idSlideLine.current.value)

}

















return(

<div className="container">


<div className="row">

<div className="col s4">
<textarea  onChange={(event)=>props.changeTextButtonsThunkCreater(props.index,event.target.value)} defaultValue={props.index+1}  className="buttonsArea" style={{backgroundColor:props.colorButton}}></textarea>
</div>


<div className="col s5 " >
    <div className="row">
<div className="col s6" >
<label>
        <input name="group1" type="radio" value="#D78100"  onClick={(event)=>props.changeColorButtonsThunkCreater(props.index,event.target.value)} />
        <span>Оранжевый</span>
      </label>
        
    
      <label>
        <input name="group1" type="radio" value="#8DBE3D" onClick={(event)=>props.changeColorButtonsThunkCreater(props.index,event.target.value)}/>
        <span>Зеленый</span>
      </label>
</div>


<div className="col s6" >
    
<label>
        <input name="group1" type="radio" value="#B3E6E9"  onClick={(event)=>props.changeColorButtonsThunkCreater(props.index,event.target.value)}/>
        <span>Голубой</span>
      </label>
    
    <label>
        <input name="group1" type="radio" value="#4AA8BD"  onClick={(event)=>props.changeColorButtonsThunkCreater(props.index,event.target.value)}/>
        <span>Конец</span>
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
     
    <input ref={idHystory} placeholder="Placeholder" id="idHystory"  min="1" max="30" type="number" className="validate idSlide" />
    </div>
    <div className="col s4 center-align">
    <input ref={idHystoryLine} placeholder="Placeholder" id="idHystoryLine"  min="1" max="30" type="number" className="validate idSlide" />
    </div>
    <div className="col s4 center-align">
    <input ref={idSlideLine} placeholder="Placeholder" id="idSlideLine"  min="1" max="30" type="number" className="validate idSlide" />
    </div> 
    <div className="row">
    
 
    </div>
 
</div>
<div className="row">
    <div className="col s6">
    <button onClick={nextIdButton} className="btn-floating tooltipped ' btn-large waves-effect waves-light green" data-position='left' data-tooltip='Добавить вариант'><i class="material-icons">check</i></button>
   
    </div>

    <div className="col s6">
    
    <button onClick={(event)=>props.deleteButtonsThunkCreater(event,props.index)} className="btn-floating tooltipped  btn-large waves-effect waves-light red"  dataposition='bottom' data-tooltip='Удалить вариант'><i class="material-icons">clear</i></button> 
    </div>
</div>

</div>










</div>
</div>


)


}
export default ButtonRedactor;