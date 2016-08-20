import{
  CREATE_COURSE,
  CREATE_COURSE_SUCCESS,
  CREATE_COURSE_FAIL,
  EDIT_COURSE,
  EDIT_COURSE_SUCCESS,
  EDIT_COURSE_FAIL,
  LOAD_COURSE,
  LOAD_COURSE_SUCCESS,
  LOAD_COURSE_FAIL
} from '../constants/index';

import {push} from 'react-router-redux';
import {SubmissionError} from 'redux-form';

export function createCourse(model) {
  return dispatch => {
    return dispatch({
      types: [CREATE_COURSE, CREATE_COURSE_SUCCESS, CREATE_COURSE_FAIL],
      promise: (client) => client.post(`/api/v1/course`, { data: model }),
      data: {
        model
      }
    })
    .then(()=> {
      return dispatch(push('/'));
    })
    .catch(res => {
      throw new SubmissionError({_error: res.error});
    });
  };
}

export function editCourse(model) {
  return dispatch => {
    return dispatch({
      types: [EDIT_COURSE, EDIT_COURSE_SUCCESS, EDIT_COURSE_FAIL],
      promise: (client) => client.put(`/api/v1/course/slug/${model.Slug}`, {data: model}),
      data: {
        model
      }
    })
      .then(()=> {
        return dispatch(push('/my-courses'));
      })
      .catch(res => {
        throw new SubmissionError({_error: res.error});
      });
  };
}

export function load(slug) {
  return {
    types: [LOAD_COURSE, LOAD_COURSE_SUCCESS, LOAD_COURSE_FAIL],
    promise: (client) => client.get(`/api/v1/course/name/${slug}`)
  };
}

