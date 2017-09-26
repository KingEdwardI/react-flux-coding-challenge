import AppDispatcher from '../dispatcher/AppDispatcher';
import { ActionTypes } from '../constants/AppConstants';

const DeleteUserActionCreators = {

  action001(arg1) {
    //
    // Do something and pass the result to the data in the dispatch.
    //
    AppDispatcher.dispatch({
      type: ActionTypes.TYPE_001,
      data: 'RESULT OF YOUT ACTION',
    });
  },

  action002(arg1) {
    AppDispatcher.dispatch({
      type: ActionTypes.TYPE_002,
      data: 'RESULT OF YOUT ACTION',
    });
  },

};

export default DeleteUserActionCreators;
