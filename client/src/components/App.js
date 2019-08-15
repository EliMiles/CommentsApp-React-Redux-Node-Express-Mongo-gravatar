import React from 'react';
import { BrowserRouter , Route } from 'react-router-dom';

import './App.css';

import AddCommentForm from './AddCommentForm';
import SearchComment from './SearchComment';
import CommentDisplay from './CommentDisplay';

const Header = () => <h1 className="Header_content">Comments App</h1>

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <Header />
                    <Route exact path="/" component={AddCommentForm} />
                    <Route exact path="/" component={SearchComment} />
                    <Route exact path="/" component={CommentDisplay} />
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;