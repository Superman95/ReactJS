import{
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  SIGNUP,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  AUTH_LOAD,
  AUTH_LOAD_SUCCESS,
  AUTH_LOAD_FAIL,
  AUTH_LOGOUT,
  AUTH_LOGOUT_SUCCESS,
  AUTH_LOGOUT_FAIL,
  AUTH_UPDATE_BASIC_INFO,
  AUTH_UPDATE_BASIC_INFO_SUCCESS,
  AUTH_UPDATE_BASIC_INFO_FAIL,
  AUTH_CHANGE_PASSWORD,
  AUTH_CHANGE_PASSWORD_SUCCESS,
  AUTH_CHANGE_PASSWORD_FAIL
} from '../constants';

import {push} from 'react-router-redux';
import {SubmissionError} from 'redux-form';
import cookie from 'react-cookie';

export function login(model) {
  return dispatch => {
    return dispatch({
      types: [LOGIN, LOGIN_SUCCESS, LOGIN_FAIL],
      promise: (client) => client.post(`/api/v1/login`, { data: model }),
      data: {
        model
      }
    })
      .then(()=> {
        return dispatch(push('/'));
      })
      .catch(res => {
        throw new SubmissionError({ _error: res.error });
      });
  };
}

export function signup(model) {
  return dispatch => {
    return dispatch({
      types: [SIGNUP, SIGNUP_SUCCESS, SIGNUP_FAIL],
      promise: (client) => client.post(`/api/v1/signup`, { data: model }),
      data: {
        model
      }
    })
      .then(()=> {
        return dispatch(push('/login'));
      })
      .catch(res => {
        throw new SubmissionError({ _error: res.error });
      });
  };
}

export function isLoaded(globalState) {
  return globalState.auth && globalState.auth.get('loaded') || !cookie.load('sessionToken');
}

export function load() {
  return {
    types: [AUTH_LOAD, AUTH_LOAD_SUCCESS, AUTH_LOAD_FAIL],
    promise: (client) => client.get('/api/v1/users/me')
  };
}

export function logout() {
  return dispatch => {
    return dispatch({
      types: [AUTH_LOGOUT, AUTH_LOGOUT_SUCCESS, AUTH_LOGOUT_FAIL],
      promise: (client) => client.post('/api/v1/logout')
    }).then(()=> {
      return dispatch(push('/'));
    });
  };
}

export function updateBasicInfo(model) {
  return dispatch => {
    return dispatch({
      types: [AUTH_UPDATE_BASIC_INFO, AUTH_UPDATE_BASIC_INFO_SUCCESS, AUTH_UPDATE_BASIC_INFO_FAIL],
      promise: (client) => client.put('/api/v1/users/me', { data: model })
    })
      .catch(res => {
        throw new SubmissionError({ _error: res.error });
      })
      .then(()=> {
        return dispatch(push('/'));
      });
  };
}

export function changePassword(model) {
  return dispatch => {
    return dispatch({
      types: [AUTH_CHANGE_PASSWORD, AUTH_CHANGE_PASSWORD_SUCCESS, AUTH_CHANGE_PASSWORD_FAIL],
      promise: (client) => client.put('/api/v1/password/change', { data: model })
    })
      .then(()=> {
        return dispatch(push('/'));
      })
      .catch(res => {
        throw new SubmissionError({ _error: res.error });
      });
  };
}

