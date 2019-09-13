import React from 'react'

import AddCommentForm from './AddCommentForm';
import SearchComment from './SearchComment';
import CommentDisplay from './CommentDisplay';

const commentsPage = () => {
    return (
        <div>
            <AddCommentForm />
            <SearchComment />
            <CommentDisplay />
        </div>
    )
}

export default commentsPage;
