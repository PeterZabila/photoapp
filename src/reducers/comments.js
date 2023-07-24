import * as actionType from '../constants/actionTypes';

const defaultComments = {
    comments: []
}

const commentsReducer = (state = defaultComments, action) => {
  switch (action.type) {
    case actionType.ADD_COMMENT:
      return { ...state, comments: [...action.payload] };
    default:
      return state;
  }
};

export default commentsReducer;