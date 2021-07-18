export const INIT = 'app/INIT';
export const init = () => dispatch => {
  dispatch({ type: INIT });
};

export const TOGGLE_NAVBAR = 'app/TOGGLE_NAVBAR';

export const toggleNavbar = () => ({ type: TOGGLE_NAVBAR });
