import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import App from './components/App';
import Voting from './components/Voting';
import Results from './components/Results';

const AppVoting = () => <App><Voting /></App>;
const AppResults = () => <App><Results /></App>;
ReactDOM.render(
    <Router>
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/results">Results</Link></li>
            </ul>
            <Route exact path="/" component={AppVoting} />
            <Route path="/results" component={AppResults} />
        </div>
    </Router>,
    document.getElementById('app')
);