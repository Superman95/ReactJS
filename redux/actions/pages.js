import{
  CREATE_PAGE,
  CREATE_PAGE_SUCCESS,
  CREATE_PAGE_FAIL
} from '../constants/index';

import {push} from 'react-router-redux';
import {SubmissionError} from 'redux-form';

export function createPage(model) {
  return dispatch => {
    return dispatch({
      types: [CREATE_PAGE, CREATE_PAGE_SUCCESS, CREATE_PAGE_FAIL],
      promise: (client) => client.post(`/api/v1/page`, {data: model}),
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
