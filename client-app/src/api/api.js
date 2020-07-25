import * as axios from 'axios';

export const redactorAPI={

    addSlide(mainText,idSlide,buttonsData){

        return axios.post(`redactor/add`,({mainText,idSlide,buttonsData}))
    }

}

export const authAPI={
getUser(){
    return axios('api/current_user')
}

}