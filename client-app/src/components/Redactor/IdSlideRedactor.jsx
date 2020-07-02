import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from "materialize-css";
import * as axios from 'axios';


import { BrowserRouter,Route } from 'react-router-dom';
import { render } from 'react-dom';



const IdSlideRedactor=(props)=>{

return(

<div className="row">
<h5 className="center-align">Номер Слайда:</h5>

<form onSubmit={props.addIdSlider}>
  <div className="col s2 offset-s3">
  <input placeholder="Placeholder" id="idHystory" type="number" className="validate idSlide" />
<label htmlFor="idHystory">Номер Истории </label>
  </div>
  <div className="col s2">
  <input placeholder="Placeholder" id="idHystoryLine" type="number" className="validate idSlide"  />
<label htmlFor="idHystoryLine">Номер линии в истории</label>
  </div>
  <div className="col s2">
  <input placeholder="Placeholder" id="idSlideLine" type="number" className="validate idSlide"  />
<label htmlFor="idSlideLine">Номер Слайда в Линии</label>
  </div>

  <div className="col s2">
  <button className="btn-floating tooltipped ' btn-large waves-effect waves-light green" data-position='right' data-tooltip='Добавить N слайда'><i class="material-icons">check</i></button>
  </div>

 </form>



</div>


)


}

export default IdSlideRedactor;