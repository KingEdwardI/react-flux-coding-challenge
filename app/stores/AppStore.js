import { ReduceStore } from 'flux/utils';
import ActionTypes from '../constants/AppConstants';
import AppDispatcher from '../dispatcher/AppDispatcher';

class AppStore extends ReduceStore {
  getInitialState() {
    return [{ id:0, firstName: 'Edward', lastName: 'Vetter-Drake', address: 'Denver, CO' }];
  }

  reduce(state, action) {

    switch (action.type) {

    case ActionTypes.ADD_USER:
      return [ ...state.concat(action.data) ];

    case ActionTypes.DELETE_USER:
      if (state.length === 1) { return []; }
      return [
        ...state.filter(user => user.id !== action.data)
      ];

    case ActionTypes.UPDATE_USER:
      let replUser = action.data;
      let toReplaceIndex = state.findIndex(user => user.id === replUser.id);
      return [
        ...state.slice(0, toReplaceIndex),
        replUser,
        ...state.slice(toReplaceIndex + 1)
      ];

    default:
      return state;
    }
  }
}

export default new AppStore(AppDispatcher);
