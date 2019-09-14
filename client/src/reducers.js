import { combineReducers } from 'redux';
import commentsReducer from './pages/main/commentsReducer';
import lastActiveTimeReducer from './pages/main/lastActiveTimeReducer';

export default combineReducers({
    comments: commentsReducer,
    lastActiveTime: lastActiveTimeReducer
});
