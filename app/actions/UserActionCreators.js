import AppDispatcher from '../dispatcher/AppDispatcher';
import { ActionTypes } from '../constants/AppConstants';

const UserActionCreators = {

  addUser: function(user) {
    AppDispatcher.dispatch({
      type: ActionTypes.ADD_USER,
      data: user,
    });
  },

  deleteUser: function(user) {
    console.log('delete', user)
    AppDispatcher.dispatch({
      type: ActionTypes.DELETE_USER,
      data: user,
    });
  }

};

export default UserActionCreators;
