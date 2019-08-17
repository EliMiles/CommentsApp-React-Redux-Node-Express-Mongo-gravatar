import axios from 'axios';
import { GET_ALL_COMMENTS , FILTER_COMMENTS } from './types';

export const addComment = (body) => async dispatch => {
    
    axios.post('/api/insert',body); // do an http post request and insert a comment to the DB
    //console.log('actions/index.js : addComment => ' + res.data.message);
};

export const getAllComments = () => async dispatch => {
    
    const res = await axios.get('/api/comments'); // do an http get request and get all comments from the DB
    //console.log('actions/index.js : getAllComments => ');
    //console.log(res.data);
    dispatch({ type: GET_ALL_COMMENTS, payload: res.data }); // dispatch to reducers/commentsReducer.js
};

export const filterComments = (value , allComments) => async dispatch => {
    //const res = await axios.get('/api/comments'); // do an http get request and get all comments from the DB

    //TODO : filter res.data with the given value "value"

    // console.log(value);
    // console.log(allComments);

    var data = allComments;

    data = data.filter((item) => item.email.toLowerCase().includes(value.toLowerCase()));

    //console.log(data);

    dispatch({ type: FILTER_COMMENTS, payload: data }); // dispatch to reducers/commentsReducer.js
};
