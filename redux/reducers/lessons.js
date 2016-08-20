import{
  CREATE_LESSON,
  CREATE_LESSON_SUCCESS,
  CREATE_LESSON_FAIL,
  LOAD_LESSON,
  LOAD_LESSON_SUCCESS,
  LOAD_LESSON_FAIL,
  EDIT_LESSON,
  EDIT_LESSON_SUCCESS,
  EDIT_LESSON_FAIL,
  INIT,
  REDUX_INIT
} from '../constants';

import Immutable from 'immutable';

const initialState = Immutable.fromJS({
  someState: null
});
export default function lessons(state = initialState, action) {
  switch (action.type) {
    case INIT:
    case REDUX_INIT:
      return Immutable.fromJS(state);
    case LOAD_LESSON_SUCCESS:
      return state.withMutations((map)=> {
        const lesson = action.result.lesson;
        map.set('lesson', lesson);
      });
    case CREATE_LESSON_SUCCESS:
    case CREATE_LESSON:
    case CREATE_LESSON_FAIL:
    case EDIT_LESSON_SUCCESS:
    case EDIT_LESSON:
    case EDIT_LESSON_FAIL:
    case LOAD_LESSON:
    case LOAD_LESSON_FAIL:
    default:
      return state;
  }
}

