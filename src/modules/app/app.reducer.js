import { TOGGLE_NAVBAR, INIT } from './app.action';

const initialState = {
  mobileOpen: false,
  initialized: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case INIT:
      return {
        ...state,
        initialized: true,
      };

    case TOGGLE_NAVBAR:
      return {
        ...state,
        mobileOpen: !state.mobileOpen,
      };

    default:
      return state;
  }
}
