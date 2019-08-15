import axios from 'axios';
import { ADD_COMMENT } from './types';

export const addComment = (body) => async dispatch => {
    
    const res = await axios.post('/api/insert',body)
    dispatch({ type: ADD_COMMENT, payload: res });
};
