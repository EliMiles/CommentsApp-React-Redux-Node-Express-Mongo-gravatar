import { combineReducers } from 'redux';
import addCommentReducer from './addCommentReducer';
import getAllCommentsReducer from './getAllCommentsReducer';

export default combineReducers({
    addComment: addCommentReducer,
    getAllComments: getAllCommentsReducer
});
