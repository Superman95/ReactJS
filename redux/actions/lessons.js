import{
  CREATE_LESSON,
  CREATE_LESSON_SUCCESS,
  CREATE_LESSON_FAIL,
  LOAD_LESSON,
  LOAD_LESSON_SUCCESS,
  LOAD_LESSON_FAIL,
  EDIT_LESSON,
  EDIT_LESSON_SUCCESS,
  EDIT_LESSON_FAIL
} from '../constants/index';

import {push} from 'react-router-redux';
import {SubmissionError} from 'redux-form';

export function createLesson(model) {
  return dispatch => {
    return dispatch({
      types: [CREATE_LESSON, CREATE_LESSON_SUCCESS, CREATE_LESSON_FAIL],
      promise: (client) => client.post(`/api/v1/lesson`, {data: model}),
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

export function editLesson(model) {
  return dispatch => {
    return dispatch({
      types: [EDIT_LESSON, EDIT_LESSON_SUCCESS, EDIT_LESSON_FAIL],
      promise: (client) => client.put(`/api/v1/lesson/${model.lessonId}`, {data: model}),
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

export function load(lessonId) {
  return {
    types: [LOAD_LESSON, LOAD_LESSON_SUCCESS, LOAD_LESSON_FAIL],
    promise: (client) => client.get(`api/v1/lesson/${lessonId}`)
  };
}
