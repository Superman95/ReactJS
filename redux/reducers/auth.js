import{
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  SIGNUP,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  INIT,
  REDUX_INIT,
  AUTH_LOAD_SUCCESS,
  AUTH_LOAD_FAIL,
  AUTH_LOAD,
  AUTH_LOGOUT_SUCCESS,
  AUTH_LOGOUT,
  AUTH_LOGOUT_FAIL,
  AUTH_UPDATE_BASIC_INFO_SUCCESS,
} from '../constants';

import Immutable from 'immutable';
import cookie from 'react-cookie';

const cookiesOpt = { path: '/', secure: false, httpOnly: false, maxAge: 60 * 60 * 24 };
const initialState = Immutable.fromJS({
  loaded: false,
  user: null
});
export default function auth(state = initialState, action) {
  switch (action.type) {
    case INIT:
    case REDUX_INIT:
      return Immutable.fromJS(state);
    case LOGIN_SUCCESS:
      return state.withMutations((map)=> {
        const {sessionToken} = action.result;
        cookie.save('sessionToken', sessionToken, cookiesOpt);
        const user = Immutable.fromJS({ name: 'foo' });
        map.set('user', user);
      });
    case AUTH_LOAD_SUCCESS:
      return state.withMutations((map)=> {
        const user = Immutable.fromJS(action.result.user);
        map.set('user', user);
      });
    case AUTH_LOGOUT_SUCCESS:
    case AUTH_LOGOUT_FAIL:
      return state.withMutations((map)=> {
        map.remove('user');
        cookie.remove('sessionToken');
      });
    case AUTH_UPDATE_BASIC_INFO_SUCCESS:
      return state.withMutations((map)=> {
        map.set('user', Immutable.fromJS(action.result.user));
      });
    case AUTH_LOAD_FAIL:
    case AUTH_LOGOUT:
    case LOGIN:
    case LOGIN_FAIL:
    case SIGNUP:
    case SIGNUP_SUCCESS:
    case SIGNUP_FAIL:
    case AUTH_LOAD:
    default:
      return state;
  }
}
