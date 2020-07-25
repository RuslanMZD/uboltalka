import {authAPI} from '../api/api';

const GET_USER="/authReducer/GET_USER"

let initialState={
user:null


};



const authReducer =(state=initialState,action)=>{


    if(action.type===GET_USER){
        let stateCopy={...state};
        stateCopy.user=action.payload || false;
        return stateCopy;
    }



return state;
}




const getUserActionCreater=(payload)=>{
    return({type:GET_USER,payload})
}


export const getUserThunkCreater=()=>{
    return(dispatch)=>{
     authAPI.getUser().then(res=>{
        //  console.log(res)
         dispatch(getUserActionCreater(res.data))
     })
      
       
    }
}




export default authReducer;