import { GET_ALL_COMMENTS } from '../actions/types';

export default function (state = null, action) {
    switch (action.type) {
        case GET_ALL_COMMENTS :
            return action.payload || false;
        default:
            return state;
    }
}