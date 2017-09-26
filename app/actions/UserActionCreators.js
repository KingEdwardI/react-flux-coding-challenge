import AppDispatcher from '../dispatcher/AppDispatcher';
import ActionTypes from '../constants/AppConstants';

const UserActionCreators = {

  // add a user object to the store by passing in the newly created user object from the AddUser component
  addUser: function(user) {
    AppDispatcher.dispatch({
      type: ActionTypes.ADD_USER,
      data: user,
    });
  },

  // delete a user from the store by passing in the user id from the UserDisplay component
  deleteUser: function(id) {
    AppDispatcher.dispatch({
      type: ActionTypes.DELETE_USER,
      data: id,
    });
  },

  // update a user in the store by passing in the updated user information from the UserDisplay component
  updateUser: function(user) {
    AppDispatcher.dispatch({
      type: ActionTypes.UPDATE_USER,
      data: user,
    });
  }

};

export default UserActionCreators;
