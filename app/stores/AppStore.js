import { ReduceStore } from 'flux/utils';
import { ActionTypes } from '../constants/AppConstants';
import AppDispatcher from '../dispatcher/AppDispatcher';
import Immutable from 'immutable';

class SampleStore extends ReduceStore {
  getInitialState() {
    return [{one: 'one', two: 'two'}];
  }

  reduce(state, action) {
    switch (action.type) {
      case ActionTypes.ADD_USER:
        return state;
      default:
        return state;
    }
  }
}

export default new SampleStore(AppDispatcher);
