// src/redux/reducers.js
import { TOGGLE_SIDEBAR } from './actions';

const initialState = {
  sidebarVisible: false,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      return {
        ...state,
        sidebarVisible: !state.sidebarVisible,
      };
    default:
      return state;
  }
};

export default rootReducer;
