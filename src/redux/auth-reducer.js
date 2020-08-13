import { authApi } from "../api/Api.js";

const POST_CLIENT_DATA = "POST_CLIENT_DATA";
const POST_CLIENT_DATA_SUCCEED = "POST_CLIENT_DATA_SUCCEED";
const POST_USER_DATA_SUCCEED = "POST_USER_DATA_SUCCEED";
const TOKEN_SUCCESS = "TOKEN_SUCCESS";

let initialState = {
  clientData: null,
  userData: null,
  email: null,
  phone: null,
  fullName: null,
  password: null,
  userName: null,
  token: null,
  allowedGrantTypes: ["password", "refresh_token"],
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_CLIENT_DATA:
      return {
        ...state,
        ...action.payload,
      };
    case POST_CLIENT_DATA_SUCCEED:
      console.log("payload suk", action.payload);
      return {
        ...state,
        ...action.payload,
      };
    case POST_USER_DATA_SUCCEED:
      return {
        ...state,
        ...action.payload,
      };
    case TOKEN_SUCCESS:
      console.log("payload", action.payload);
      localStorage.setItem("token", action.payload);
      return {
        ...state,
        token: action.payload,
      };
    default:
      return state;
  }
};

export const postAuthData = (email, phone, fullName, isAuth) => {
  return {
    type: POST_CLIENT_DATA,
    payload: { email, phone, fullName, isAuth },
  };
};
export const clientDataSucceed = (clientData) => ({
  type: POST_CLIENT_DATA_SUCCEED,
  payload: { clientData },
});
export const userDataSucceed = (userData) => ({
  type: POST_USER_DATA_SUCCEED,
  payload: { userData },
});
export const tokenSuccessfully = (token) => ({
  type: TOKEN_SUCCESS,
  payload: token,
});

// THUNK_CREATORs
export const authClient = () => async (dispatch, getState) => {
  const { auth } = getState();
  const name = `f${(~~(Math.random() * 1e8)).toString(16)}`;
  console.log("registerClient", getState);
  const { data } = await authApi.registerClient({
    name,
    allowedGrantTypes: auth.allowedGrantTypes,
  });
  dispatch(clientDataSucceed(data));
};

export const authUser = () => async (dispatch, getState) => {
  console.log("state", getState());
  const { form } = getState();
  console.log("data", getState());
  const { data: userData } = await authApi.registerUser(
    form.registrationForm.values
  );
  console.log("registerUser", userData);
  dispatch(userDataSucceed(userData));
};

export const getLoginToken = () => async (dispatch, getState) => {
  const state = getState();
  const clientId =
    state.auth.clientData.id + "_" + state.auth.clientData.randomId;
  const clientSecret = state.auth.clientData.secret;
  console.log("state dly valeri blut", state);
  let response = await authApi.login(clientId, clientSecret);
  console.log("token", response);
  dispatch(tokenSuccessfully(response.data.access_token));
};

export default authReducer;
