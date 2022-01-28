import { LOAD_PROFILE, LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, LOG_OUT } from "../ActionType";

const initialState = {
   accessToken:sessionStorage.getItem("access-token")?sessionStorage.getItem("access-token"):null,
   user:sessionStorage.getItem("user")?JSON.parse(sessionStorage.getItem("user")):null,
   loading:false
};

export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_REQUEST :
      return { ...state, loading:true };
   case LOGIN_SUCCESS :
      return {...state, accessToken:payload,loading:false};
   case LOGIN_FAIL :
      return {...state, accessToken:null,error:payload};
   case LOAD_PROFILE :
      return {...state, user:payload};
   case LOG_OUT :
      return {...state, accessToken:null, user:null};
    default:
      return state;
  }
};