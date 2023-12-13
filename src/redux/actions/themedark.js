import {SET_LIGHT_MODE, SET_SWAP} from './types'



export function themedark(payload){


    // console.log(payload)

    return (dispatch)=>{
        dispatch({
        type: SET_LIGHT_MODE,
        payload:payload

    })}
}



export function swapping(payload){


    console.log(payload, "swap")

    return (dispatch)=>{
        dispatch({
        type: SET_SWAP,
        payload:payload

    })}
}
    