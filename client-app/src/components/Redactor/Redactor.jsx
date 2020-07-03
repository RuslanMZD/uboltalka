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



addSlideToDb=async()=>{

let mainText =this.state.mainText;
let idSlide= this.state.idSlide;
 let buttonsData = [...this.state.buttons];
 console.log(buttonsData)
let response =await axios.post(`redactor/add`,{mainText,idSlide,buttonsData});
  console.log(response)
if(response.data.mess==="Slide ADD"){
  M.toast({html: 'СЛАЙД ДОБАВЛЕН'})
}else{
  M.toast({html: 'ОШИБКА ДОБАВЛЕНИЯ'})
}



}


addMainText=(event)=>{
    this.setState({
    mainText:event.target.value
  })
  console.log(this.state.buttons)

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

let buttonsCopy =[...this.state.buttons];

 buttonsCopy.push({text:"",color:"",nextButton:""})
this.setState({buttons:buttonsCopy})

}



deleteButtons=(index)=>{
  let buttonsCopy =[...this.state.buttons];

  buttonsCopy.splice(index,1)
 this.setState({buttons:buttonsCopy})
 

// console.log(buttonsCopy)
 }




addVariant=(index,areaButtons,colorButton,nextIdButton)=>{
  let buttonsCopy =[...this.state.buttons];
buttonsCopy[index]={areaButtons,colorButton,nextIdButton};
this.setState({buttons:buttonsCopy})


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
  
  
{this.state.buttons.length>0 ?   <div className="col s12">{this.state.buttons.map((data,index)=><div key={index}><ButtonRedactor addVariant={this.addVariant} deleteButtons={this.deleteButtons} index={index}/></div>)}</div> : null } 











</div>

<div className="row"></div>




<div className="row">
  <div className="cols s4 offset-s4 center-align">
    <button onClick={this.addButtons} class="btn-floating btn-large cyan pulse tooltipped waves-effect waves-light"  data-position="top" data-tooltip="Добавить вариант события в слайд"><i class="material-icons">add_circle_outline</i></button>

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

export default Redactor;