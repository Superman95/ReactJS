import {TOGGLE_SIDEBAR, INIT, REDUX_INIT} from '../constants';
import Immutable from'immutable';

const initialState = Immutable.fromJS({
  isVisible: true
});

const sidebar = (state = initialState, action) => {
  switch (action.type) {
    case REDUX_INIT:
    case INIT:
      return Immutable.fromJS(state);
    case TOGGLE_SIDEBAR:
      return state.withMutations((map)=> {
        const isVisible = map.get('isVisible');
        map.set('isVisible', !isVisible);
      });
    default:
      return state;
  }
};

export default sidebar;
