import {createStore} from "redux"
import rootReducer from "./reducers/rootReducer"

const store = createStore(rootReducer, );
    



export default store

export type RootState = ReturnType<typeof store.getState>

// import {createStore,combineReducers} from "redux"
// import rootReducer from "./reducers/rootReducer"

// const store = createStore(
//     combineReducers({items: rootReducer}),
//     (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__());
//   return store;
// export default store

// // export type RootState = ReturnType<typeof store.getState>



