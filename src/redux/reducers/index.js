import {combineReducers} from 'redux';
import notesReducer from './notes/notesReducer';
import usersReducer from './user/userReducer';
import loadingReducer from '../reducers/loading-status/loadingReducer'


const rootReducer = combineReducers({
  notes: notesReducer,
  user: usersReducer,
  loading: loadingReducer
});

export default rootReducer;