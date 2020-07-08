import {redactorAPI} from '../api/api';

const ADD_MAIN_TEXT ="/redactorReducer/ADD_MAIN_TEXT";
const ADD_ID_SLIDE="/redactorReducer/ADD_ID_SLIDE";
const ADD_BUTTONS="/redactorReducer/ADD_BUTTONS";
const DELETE_BUTTONS="/redactorReducer/DELETE_BUTTONS";
const ADD_VALUE_BUTTONS="/redactorReducer/ADD_VALUE_BUTTONS";
const CHANGE_COLOR_BUTTONS="/redactorReducer/CHANGE_COLOR_BUTTONS";
const CHANGE_TEXT_BUTTONS="/redactorReducer/CHANGE_TEXT_BUTTONS";
const NEXT_ID_BUTTON="/redactorReducer/NEXT_ID_BUTTON";
const ADD_SLIDE_DB="/redactorReducer/ADD_SLIDE_DB";


let initialState={

    isLoading:false,
    viewButton:false,
    idSlide:null,
    mainText:null,
      buttons:[]


};



const redactorReducer =(state=initialState,action)=>{

if(action.type===ADD_MAIN_TEXT){
    let stateCopy={...state};
    stateCopy.mainText=action.mainText;
    return stateCopy;

}else if(action.type===ADD_ID_SLIDE){
    let stateCopy={...state};
    stateCopy.idSlide=action. idSlide;
    return stateCopy;
    
}else if(action.type===ADD_BUTTONS){
    let stateCopy={...state,buttons:[...state.buttons]};
    stateCopy.buttons.push({textButtons:"",colorButton:"",nextIdButton:""});
    return stateCopy;


}else if(action.type===DELETE_BUTTONS){
    let stateCopy={...state,buttons:[...state.buttons]};
    stateCopy.buttons.splice(action.index,1);
    return stateCopy;

}else if(action.type===CHANGE_COLOR_BUTTONS){
    let stateCopy={...state,buttons:[...state.buttons]};
    stateCopy.buttons[action.index].colorButton=action.colorButton;
    return stateCopy;

}else if(action.type===CHANGE_TEXT_BUTTONS){
    let stateCopy={...state,buttons:[...state.buttons]};
    stateCopy.buttons[action.index].textButtons=action.textButtons;
    return stateCopy;

}else if(action.type===NEXT_ID_BUTTON){
    let stateCopy={...state,buttons:[...state.buttons]};
    stateCopy.buttons[action.index].nextIdButton=action.nextIdButton;
    return stateCopy;

}else if(action.type===ADD_SLIDE_DB){
    let stateCopy={...state,buttons:[...state.buttons]};
    stateCopy.isLoading=!state.isLoading;
    return stateCopy;

}



















    return state;
}

//---------------------------------------------mainText
 let addMainTextAction=(mainText)=>{
    return({type:ADD_MAIN_TEXT,mainText})
}


export const addMainTextThunkCreater=(mainText)=>{
return(dispatch)=>{
dispatch(addMainTextAction(mainText))

}
}

//---------------------------------------------idSlider

let addIdSlideAction = (idSlide)=>{
return({type:ADD_ID_SLIDE,idSlide})

}


export const addIdSlideThunkCreater=(idSlide)=>{
    return(dispatch)=>{
    dispatch(addIdSlideAction(idSlide))
    
    }
    }
    
//---------------------------------------------addButtons

let addButtonsAction=()=>{
    return({type:ADD_BUTTONS})
};

export const addButtonsThunkCreater=()=>{
return(dispatch)=>{
    dispatch(addButtonsAction())
}}

//---------------------------------------------deleteButtons

let deleteButtonsAction=(index)=>{
    return({type:DELETE_BUTTONS,index})
}

export const deleteButtonsThunkCreater=(index)=>{
    return(dispatch)=>{
        dispatch(deleteButtonsAction(index))
    }
}


//---------------------------------------------changeColorButtons
let changeColorButtonsAction=(index,colorButton)=>{
    return({type:CHANGE_COLOR_BUTTONS,index,colorButton})
}

export const changeColorButtonsThunkCreater=(index,colorButton)=>{
    return(dispatch)=>{
        dispatch(changeColorButtonsAction(index,colorButton))
    }
}

//---------------------------------------------changeTextButtons
let changeTextButtonsAction=(index,textButtons)=>{
    return({type:CHANGE_TEXT_BUTTONS,index,textButtons})
}

export const changeTextButtonsThunkCreater=(index,textButtons)=>{
    return(dispatch)=>{
        dispatch(changeTextButtonsAction(index,textButtons))
    }
}
//---------------------------------------------nextIdButtons
let nextIdButtonsAction=(index,nextIdButton)=>{
    return({type:NEXT_ID_BUTTON,index,nextIdButton})
}

export const nextIdButtonsThunkCreater=(index,nextIdButton)=>{
    return(dispatch)=>{
        dispatch(nextIdButtonsAction(index,nextIdButton))
    }
}
//---------------------------------------------addSlideToBd

let addSlideToBdAtcion=()=>{
    return({type:ADD_SLIDE_DB})
}


export const addSlideToBbThunkCreater=()=>{
    return(dispatch)=>{
        dispatch(addSlideToBdAtcion());
 
    }}


export default redactorReducer;







