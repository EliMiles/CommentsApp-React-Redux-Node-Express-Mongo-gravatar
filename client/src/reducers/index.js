import { combineReducers } from 'redux';
import addCommentReducer from './addCommentReducer';

export default combineReducers({
    addComment: addCommentReducer
});