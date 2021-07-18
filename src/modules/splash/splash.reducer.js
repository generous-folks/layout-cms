import { HIDE_SPLASH, SHOW_SPLASH } from './splash.action';

const initialState = {
  splash: false,
  splashed: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_SPLASH:
      return { ...state, splash: true };

    case HIDE_SPLASH:
      return { ...state, splashed: true, splash: false };

    default:
      return state;
  }
}
