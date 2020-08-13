import { getAuthUserData } from "./auth-reducer";


const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS";

let initialState = {
  initialized: false
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true
      };
    default:
      return state;
  }
};

export const initializedSuccess = () => {
  return {
    type: INITIALIZED_SUCCESS
  };
};

// THUNK_CREATORs

export const initializeApp = () => (dispatch) => {     // Когда все промисы из массивы зарезолвятся 
  let promise = dispatch(getAuthUserData())             // тогда then и в стейте изменится с false на true 
  Promise.all([promise,]).then(() => {
      dispatch(initializedSuccess())       
  })
};

export default appReducer