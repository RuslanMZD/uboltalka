import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from "materialize-css";
import * as axios from 'axios';
import'./Redactor.css';
import IdSlideRedactor from './IdSlideRedactor';
import ButtonRedactor from './ButtonRedactor';  

import { BrowserRouter,Route } from 'react-router-dom';

class Redactor extends React.Component{
constructor(props){
    super(props)
    this.state={
      idSlide:"",
      mainText:"",
        buttons:[]


    }
}



componentDidMount(){
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.tooltipped');
    var instances = M.Tooltip.init(elems, {});
  });
}


addMainText=(event)=>{
    this.setState({
    mainText:event.target.value
  })
  console.log( this.state.idSlide)

};


obrabotkaId=(event)=>{

  let idHystory =event.target.idHystory.value;
  let idHystoryLine =event.target.idHystoryLine.value;
  let idSlideLine =event.target.idSlideLine.value;
 let idSlide=`${idHystory}_${idHystoryLine}_${idSlideLine}`;
 if(idHystory>0 &&idHystoryLine>0 && idSlideLine>0){
  return idSlide
}
 
}


addIdSlider=(event)=>{
  event.preventDefault()
 this.setState({idSlide:this.obrabotkaId(event)})
   
  
}





addButtons=(event)=>{

 

}

render(){
return(
<div className="row">
  <div className="col s12 "></div>
<h3 className="center-align">Коструктор слайдов</h3>
<IdSlideRedactor addIdSlider={this.addIdSlider} />

<div className="row">
    <div class="col s4 offset-s4 ">
     

      <textarea placeholder="Основной текст слайда" className="textAreaRedactor"  onChange={this.addMainText}></textarea>
    </div>
    </div>


    <div className="row">
  
  
  <div className="col s12">
<ButtonRedactor />
   
  
  
  </div>











</div>

<div className="row"></div>




<div className="row">
  <div className="cols s4 offset-s4 center-align">
    <button class="btn-floating btn-large cyan pulse tooltipped waves-effect waves-light"  data-position="top" data-tooltip="Добавить вариант события в слайд"><i class="material-icons">add_circle_outline</i></button>

</div>
</div>







<div className="row">
    <div className="col s12 center-align">
    <button className="waves-effect  tooltipped waves-light btn-large" data-position="bottom" data-tooltip="Добавить Слайд в Историю"><i class="material-icons left">add</i>ДОБАВИТЬ СЛАЙД</button>
    </div>
</div>













  </div>

)


}}

export default Redactor;