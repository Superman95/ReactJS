import{
  CREATE_PAGE,
  CREATE_PAGE_SUCCESS,
  CREATE_PAGE_FAIL,
  INIT,
  REDUX_INIT
} from '../constants';

import Immutable from 'immutable';

const initialState = Immutable.fromJS({
  someState: null
});
export default function pages(state = initialState, action) {
  switch (action.type) {
    case INIT:
    case REDUX_INIT:
      return Immutable.fromJS(state);
    case CREATE_PAGE_SUCCESS:
    case CREATE_PAGE:
    case CREATE_PAGE_FAIL:
    default:
      return state;
  }
}
