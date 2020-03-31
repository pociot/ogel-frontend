import axios from 'axios';

export const FETCH_REPORTS_REQUEST = 'FETCH_REPORTS_REQUEST';
export const FETCH_REPORTS_SUCCESS = 'FETCH_REPORTS_SUCCESS';
export const FETCH_REPORTS_FAILURE = 'FETCH_REPORTS_FAILURE';

function requestFetchReports() {
  return {
    type: FETCH_REPORTS_REQUEST,
    isFetching: true,
  };
}

function fetchReportsSuccess(reports) {
  return {
    type: FETCH_REPORTS_SUCCESS,
    isFetching: false,
    reports,
  };
}

function fetchReportsError(message) {
  return {
    type: FETCH_REPORTS_FAILURE,
    isFetching: false,
    message,
  };
}

export function fetchReports() {
  return dispatch => {
    dispatch(requestFetchReports());

    return axios.get(process.env.REACT_APP_API_URL + '/reports/production')
    .then(responseJson => ({
      reports: responseJson.data,
      responseJson,
    }))
    .then(({reports, responseJson}) => {
      if (!responseJson.data) {
        // If there was a problem, we want to
        // dispatch the error condition
        dispatch(fetchReportsError(reports.message));
        return Promise.reject(reports);
      }
      // Dispatch the success action
      dispatch(fetchReportsSuccess(reports));
      return Promise.resolve(reports);
    })
    .catch(err => console.error('Error: ', err));
  };
}
