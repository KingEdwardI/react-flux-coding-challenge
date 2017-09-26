import AppDispatcher from '../dispatcher/AppDispatcher';
import ActionTypes from '../constants/AppConstants';

const UserActionCreators = {

  addUser: function(user) {
    AppDispatcher.dispatch({
      type: ActionTypes.ADD_USER,
      data: user,
    });
  },

  deleteUser: function(user) {
    AppDispatcher.dispatch({
      type: ActionTypes.DELETE_USER,
      data: user,
    });
  },

  updateUser: function(user) {
    AppDispatcher.dispatch({
      type: ActionTypes.UPDATE_USER,
      data: user,
    });
  }

};

export default UserActionCreators;
