import axios from 'axios';
import { ADD_COMMENT, GET_ALL_COMMENTS } from './types';

export const addComment = (body) => async dispatch => {
    
    const res = await axios.post('/api/insert',body);
    dispatch({ type: ADD_COMMENT, payload: res });
};

export const getAllComments = () => async dispatch => {
    
    const res = await axios.get('/api/comments');
    dispatch({ type: GET_ALL_COMMENTS, payload: res.data });
};
