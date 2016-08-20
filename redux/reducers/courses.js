import{
  CREATE_COURSE,
  CREATE_COURSE_SUCCESS,
  CREATE_COURSE_FAIL,
  EDIT_COURSE,
  EDIT_COURSE_SUCCESS,
  EDIT_COURSE_FAIL,
  LOAD_COURSE,
  LOAD_COURSE_SUCCESS,
  LOAD_COURSE_FAIL,
  INIT,
  REDUX_INIT
} from '../constants';

import Immutable from 'immutable';

const initialState = Immutable.fromJS({
  someState: null
});
export default function courses(state = initialState, action) {
  switch (action.type) {
    case INIT:
    case REDUX_INIT:
      return Immutable.fromJS(state);
    case LOAD_COURSE_SUCCESS:
      return state.withMutations((map)=> {
        const course = action.result.courses;
        map.set('course', course);
      });
    case CREATE_COURSE_SUCCESS:
    case CREATE_COURSE:
    case CREATE_COURSE_FAIL:
    case EDIT_COURSE_SUCCESS:
    case EDIT_COURSE:
    case EDIT_COURSE_FAIL:
    case LOAD_COURSE:
    case LOAD_COURSE_FAIL:
    default:
      return state;
  }
}
