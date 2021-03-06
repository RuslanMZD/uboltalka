import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from "materialize-css";
import * as axios from 'axios';
import {compose} from 'redux';
import {connect} from "react-redux";
import'./Redactor.css';
import IdSlideRedactor from './IdSlideRedactor';
import ButtonRedactor from './ButtonRedactor';  
import {redactorAPI} from '../../api/api';
import {withAuthRedirect} from '../hoc/withAuthRedirect';

import {addMainTextThunkCreater,addIdSlideThunkCreater,addButtonsThunkCreater,deleteButtonsThunkCreater,changeColorButtonsThunkCreater,changeTextButtonsThunkCreater,nextIdButtonsThunkCreater} from '../../store/redactor-reducer';  

import { BrowserRouter,Route } from 'react-router-dom';

class Redactor extends React.Component{
constructor(props){
    super(props)
    this.state={
  
      idSlide:null,
      mainText:null,
        buttons:[]


    }
}


refreshRedactor(){
  this.setState({
    idSlide:this.props.idSlide,
    mainText:this.props.mainText,
    buttons:[...this.props.buttons]
    })
}




componentDidMount(){
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.tooltipped');
    var instances = M.Tooltip.init(elems, {});
  });
this.refreshRedactor()

}


componentDidUpdate(prevProps,prevState, snapshot){
if(this.props != prevProps){
  this.refreshRedactor();
}

}







addSlideToDb=async()=>{

let mainText =this.props.mainText;
let idSlide= this.props.idSlide;
 let buttonsData = [...this.props.buttons];
 console.log(buttonsData)
let response =await redactorAPI.addSlide(mainText,idSlide,buttonsData);
  console.log(response)
if(response.data.mess==="Slide ADD"){
  M.toast({html: 'СЛАЙД ДОБАВЛЕН'})
}else{
  M.toast({html: 'ОШИБКА ДОБАВЛЕНИЯ'})
}



}






addMainText=(event)=>{
  let mainText=event.target.value;
  this.props.addMainTextThunkCreater(mainText);
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
  event.preventDefault();
  let idSlide =this.obrabotkaId(event);
 this.props.addIdSlideThunkCreater(idSlide) 
}





addButtons=(event)=>{
this.props.addButtonsThunkCreater();

}












render(){
return(
<div className="row">
  <div className="col s12 "></div>
<h3 className="center-align">Коструктор слайдов</h3>
<IdSlideRedactor addIdSlider={this.addIdSlider} />

<div className="row">
    <div class="col s4 offset-s4 ">
     

      <textarea placeholder="Основной текст слайда" className="textAreaRedactor" value={this.props.mainText} onChange={this.addMainText}></textarea>
    </div>
    </div>


    <div className="row">
  
  
{this.state.buttons ?   <div className="col s12">{this.state.buttons.map((data,index)=><div key={index}><ButtonRedactor colorButton={data.colorButton} textButtons={data.textButtons} 
changeColorButtonsThunkCreater={this.props.changeColorButtonsThunkCreater} obrabotkaId={this.obrabotkaId} nextIdButtonsThunkCreater={this.props.nextIdButtonsThunkCreater}
 deleteButtonsThunkCreater={this.props.deleteButtonsThunkCreater} changeTextButtonsThunkCreater={this.props.changeTextButtonsThunkCreater} index={index}/></div>)}</div> : null } 










</div>

<div className="row"></div>




<div className="row">
  <div className="cols s4 offset-s4 center-align">
    <button onClick={this.props.addButtonsThunkCreater} class="btn-floating btn-large cyan pulse tooltipped waves-effect waves-light"  data-position="top" data-tooltip="Добавить вариант события в слайд"><i class="material-icons">add_circle_outline</i></button>

</div>
</div>







<div className="row">
    <div className="col s12 center-align">
    <button onClick={this.addSlideToDb} className="waves-effect  tooltipped waves-light btn-large" data-position="bottom" data-tooltip="Добавить Слайд в Историю"><i class="material-icons left">add</i>ДОБАВИТЬ СЛАЙД</button>
    </div>
</div>













  </div>

)


}}



let mapStateToProps=(state)=>({

mainText:state.redactor.mainText,
idSlide:state.redactor.idSlide,
buttons:state.redactor.buttons


})


export default compose( connect(mapStateToProps,
  {addMainTextThunkCreater,addIdSlideThunkCreater,addButtonsThunkCreater,
  deleteButtonsThunkCreater,changeColorButtonsThunkCreater,
  changeTextButtonsThunkCreater,nextIdButtonsThunkCreater}),withAuthRedirect)(Redactor);