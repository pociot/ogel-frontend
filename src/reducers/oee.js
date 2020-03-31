import {
  FETCH_OEE_FAILURE,
  FETCH_OEE_SUCCESS,
  FETCH_OEE_REQUEST
} from '../actions/oee';

export default function oee(
    state = {
      isFetching: false,
    },
    action,
) {
  switch (action.type) {
    case FETCH_OEE_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case FETCH_OEE_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        oee: action.oee,
      });
    case FETCH_OEE_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        message: 'Something wrong happened. Please come back later',
      });
    default:
      return state;
  }
}
