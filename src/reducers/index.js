import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import Settings from './Settings';
import Auth from './Auth';

const reducers = combineReducers({
  routing: routerReducer,
  settings: Settings,
  auth: Auth,
  form: formReducer
});

export default reducers;
