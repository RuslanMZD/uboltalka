import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from "materialize-css";
import * as axios from 'axios';



const Buttons =(props)=>{




const getHystory =()=>{
    props.getHystory(props.nextIdButton)
}

return(
<div  onClick={getHystory} className="button" style={{backgroundColor:props.color}}>
<div>{props.text}</div>
{/* <div>{props.color}</div> */}
<div>{props.nextIdButton}</div>

</div>
)

}
export default Buttons;