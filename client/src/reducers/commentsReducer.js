import { GET_ALL_COMMENTS, FILTER_COMMENTS } from '../actions/types';

export default function (state = [{}], action) {
    switch (action.type) {
        case GET_ALL_COMMENTS:
            return action.payload || [{}]; // updating the general state ( the store! ) in src/index.js
        case FILTER_COMMENTS:
            return action.payload || [{}]; // updating the general state ( the store! ) in src/index.js
        default:
            return state;
    }
}