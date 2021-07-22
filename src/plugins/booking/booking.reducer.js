import { INIT_BOOKING } from './booking.actions';

const initialState = {
  initialized: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case INIT_BOOKING:
      return {
        ...state,
        initialized: true,
      };

    default:
      return state;
  }
}
