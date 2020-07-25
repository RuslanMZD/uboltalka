import React,{useState,PureComponent} from 'react';
import { connect } from 'react-redux';
import {withAuthRedirect} from '../hoc/withAuthRedirect';
import {  Redirect, NavLink, withRouter } from 'react-router-dom';
import * as axios from 'axios';
import {compose} from 'redux';
import Buttons from './Buttons';
import './Content.css';



class Content extends React.PureComponent{

constructor(props){
    super(props)

    this.state={
        isLoading:false,
        mainText:"",
        buttonsData:[]
    }
}


componentDidMount(){
    this.setState({isLoading:true});
    axios.get(`content/hystory1`).then(res=>{      
        return res.data.data[0].slide}).then(res=>{
             console.log(res)
     
         let buttonsData=[...res.buttonsData]    
             this.setState({
                 mainText:res.mainText,
                 buttonsData
             })
         })

         this.setState({isLoading:false});

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
<>
        {this.state.isLoading ? 
            (<p>...Loading</p>) : (
        <div>
            <div className="center-align mainText" style={{backgroundColor:"#B3E6E9"}}>
                {this.state.mainText}
            </div>

            <div>
                {this.state.buttonsData.map((data,index)=><div key={index}><Buttons  getHystory={this.getHystory} color={data.colorButton} text={data.textButtons} nextIdButton={data.nextIdButton} /></div>)}
            </div>




        </div>



     ) }
     
     </>
     )



}


}


export default compose(withAuthRedirect)(Content);