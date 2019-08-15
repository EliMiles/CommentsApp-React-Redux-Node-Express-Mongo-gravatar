import React from 'react';
import { BrowserRouter , Route } from 'react-router-dom';

import AddCommentForm from './AddCommentForm';
import SearchComment from './SearchComment';
import CommentDisplay from './CommentDisplay';

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <Route exact path="/" component={AddCommentForm} />
                    <Route exact path="/" component={SearchComment} />
                    <Route exact path="/" component={CommentDisplay} />
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;