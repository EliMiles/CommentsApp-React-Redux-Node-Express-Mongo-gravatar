import React from 'react';
import { BrowserRouter , Route } from 'react-router-dom';

import './App.css';

import commentsPage from './commentsPage';

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <Route exact path="/" component={commentsPage} />
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;