


// const initialState = {
// lightMode: false
//     }

import { SET_SWAP } from "redux/actions/types";


// const changeTheme = (state = initialState, action) => {
//     const { type, payload } = action;
//     switch (type) {
//         case 'SET_LIGHT_MODE': {
//             return { ...state, lightMode: payload };
//         }
//            default:
//             return state;
//     }
// }

// export default changeTheme;





// import {SAVE_ACTION} from '../actions/save-action';


const initialState = {
    SET_SWAP: ''
};

const swapreducer = (state = initialState, {type, payload} = {}) => {
    switch(type) {
        case SET_SWAP: {
            const {SETSWAP} = payload
            console.log(payload, "pay11")
            return {
                ...state,
                payload
                };
            }
        default:
            return state;
    }
};

export default swapreducer;