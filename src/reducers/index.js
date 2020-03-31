import { combineReducers } from 'redux';
import reports from './report';
import temperatures from './temperatures';
import oee from './oee';

export default combineReducers({
  reports,
  temperatures,
  oee,
});
