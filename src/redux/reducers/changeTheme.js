


// const initialState = {
// lightMode: false
//     }

import { SET_LIGHT_MODE } from "redux/actions/types";


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
    LightMode: false
};

const changeTheme = (state = initialState, {type, payload} = {}) => {
    switch(type) {
        case SET_LIGHT_MODE: {
            const {LightMode} = payload
            // console.log(payload, "pay")
            return {
                ...state,
                payload
                };
            }
        default:
            return state;
    }
};

export default changeTheme;