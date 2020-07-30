import {Auth} from "./auth-reducer";

const SET_INITIALIZED = "SET_INITIALIZED";
const SET_SIDEBAR = "SET_SIDEBAR";

let initialState = {
  initialized: false,
  side: null
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INITIALIZED:
      return {
        ...state,
        initialized: true,
      };
    case SET_SIDEBAR:
      return{
        ...state,
        side: action.sides
      }
    default:
      return state;
  }
};

export const initializedSuccsess = () => ({ type: SET_INITIALIZED });

export const setSidebar = (sides) =>({
    type: SET_SIDEBAR,
    sides
})



export const initializeApp = () => (dispatch) => {
  let promise = dispatch(Auth());

  Promise.all([promise]).then(() => {
    dispatch(initializedSuccsess());
  });
};

export default appReducer;
