import { combineReducers } from 'redux';
import commentsReducer from './commentsReducer';
import lastActiveTimeReducer from './lastActiveTimeReducer';

export default combineReducers({
    comments: commentsReducer,
    lastActiveTime: lastActiveTimeReducer
});
