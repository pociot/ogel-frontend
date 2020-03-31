import {
  FETCH_REPORTS_FAILURE,
  FETCH_REPORTS_REQUEST,
  FETCH_REPORTS_SUCCESS
} from '../actions/report';

export default function reports(
    state = {
      isFetching: false,
    },
    action,
) {
  switch (action.type) {
    case FETCH_REPORTS_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case FETCH_REPORTS_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        reports: action.reports,
      });
    case FETCH_REPORTS_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        message: 'Something wrong happened. Please come back later',
      });
    default:
      return state;
  }
}
