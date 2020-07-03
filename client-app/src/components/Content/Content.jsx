import React,{useState,PureComponent} from 'react';
import { connect } from 'react-redux';


import {  Redirect, NavLink, withRouter } from 'react-router-dom';

import * as axios from 'axios';

import {compose} from 'redux';
import Buttons from './Buttons';



class Content extends React.PureComponent{

constructor(props){
    super(props)

    this.state={
        mainText:"",
        buttonsData:[]
    }
}


componentDidMount(){
    axios.get(`content/hystory1`).then(res=>{      
        return res.data.data[0].slide}).then(res=>{
             console.log(res)
     
         let buttonsData=[...res.buttonsData]    
             this.setState({
                 mainText:res.mainText,
                 buttonsData
             })
         })
}


getHystory=(id)=>{
    axios.get(`content/hystory1/${id}`).then(res=>{
       
        return res.data.data[0].slide}).then(res=>{
            
    
        let buttonsData=[...res.buttonsData]    
            this.setState({
                mainText:res.mainText,
                buttonsData
            })
        })
    
    
    
    
    
    }

    


render(){

    return(
        <div>
            <div style={{backgroundColor:"#B3E6E9"}}>
                {this.state.mainText}
            </div>

            <div>
                {this.state.buttonsData.map((data,index)=><div key={index}><Buttons  getHystory={this.getHystory} color={data.colorButton} text={data.areaButtons} nextIdButton={data.nextIdButton} /></div>)}
            </div>




        </div>



    )
}




}


export default Content;