import {
  FETCH_TEMPERATURES_FAILURE,
  FETCH_TEMPERATURES_SUCCESS,
  FETCH_TEMPERATURES_REQUEST
} from '../actions/temperature';

export default function temperatures(
    state = {
      isFetching: false,
    },
    action,
) {
  switch (action.type) {
    case FETCH_TEMPERATURES_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case FETCH_TEMPERATURES_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        temperatures: action.temperatures,
      });
    case FETCH_TEMPERATURES_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        message: 'Something wrong happened. Please come back later',
      });
    default:
      return state;
  }
}
