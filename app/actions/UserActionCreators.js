import AppDispatcher from '../dispatcher/AppDispatcher';
import { ActionTypes } from '../constants/AppConstants';

const UserActionCreators = {

  addUser: function(user) {
    console.log('adduser action', user)
    AppDispatcher.dispatch({
      type: ActionTypes.ADD_USER,
      data: user,
    });
  },

};

export default UserActionCreators;
