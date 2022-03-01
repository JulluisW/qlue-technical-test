import { FETCH_DATA_SUCCESS, FETCH_MESSAGE_SUCCESS, FETCH_ERROR, FETCH_LOADING } from "../actionTypes";

const initialValue = {
  message: "",
  data: [],
  error: "",
  loading: true,
};

function indexReducers(state = initialValue, action) {
  if (action.type === FETCH_DATA_SUCCESS) {
    return {
      ...state,
      data: action.payload,
    };
  } else if (action.type === FETCH_MESSAGE_SUCCESS) {
    return {
      ...state,
      message: action.payload,
    };
  } else if (action.type === FETCH_ERROR) {
    return {
      ...state,
      error: action.payload,
    };
  } else if (action.type === FETCH_LOADING) {
    return {
      ...state,
      loading: action.payload,
    };
  }
  return state
}

export default indexReducers;
