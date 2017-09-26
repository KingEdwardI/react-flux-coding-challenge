import { ReduceStore } from 'flux/utils';
import { ActionTypes } from '../constants/AppConstants';
import AppDispatcher from '../dispatcher/AppDispatcher';
import Immutable from 'immutable';

class AppStore extends ReduceStore {
  getInitialState() {
    return [{firstName: 'Edward', lastName: 'Vetter-Drake', address: 'Denver, CO'}];
  }

  reduce(state, action) {
    switch (action.type) {
      case ActionTypes.ADD_USER:
        return [ ...state.concat(action.data) ];
      default:
        return state;
    }
  }
}

export default new AppStore(AppDispatcher);
