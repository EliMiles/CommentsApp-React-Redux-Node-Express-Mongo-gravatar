import { GET_ALL_COMMENTS, FILTER_COMMENTS } from '../actions/types';

//export default function (state = null, action) {
export default function (state = [{}], action) {
    switch (action.type) {
        case GET_ALL_COMMENTS:
            //console.log('reducers/commentsReducer.js (dispatched from actions/index.js) => ');
            //console.log(action.payload);
            return action.payload || [{}]; // updating the general state ( the store! ) in src/index.js
            //return action.payload || false; // updating the general state ( the store! ) in src/index.js
        case FILTER_COMMENTS:
            return action.payload || [{}];
        default:
            return state;
    }
}