import { GET_ALL_LAST_ACTIVE_TIME } from '../actions/types';

export default function (state = [{}], action) {
    switch (action.type) {
        case GET_ALL_LAST_ACTIVE_TIME:
            return action.payload || [{}]; // updating the general state ( the store! ) in src/index.js
        default:
            return state;
    }
}