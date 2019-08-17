import { GET_ALL_COMMENTS } from '../actions/types';

export default function (state = null, action) {
    switch (action.type) {
        case GET_ALL_COMMENTS:
            //console.log('reducers/commentsReducer.js (dispatched from actions/index.js) => ');
            //console.log(action.payload);
            return action.payload || false;
        default:
            return state;
    }
}