import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import VotingContainer from './components/Voting';
import ResultsContainer from './components/Results';

const store = createStore(reducer);
store.dispatch({
    type: 'SET_STATE',
    state: {
        vote: {
            pair: ['Sunshine', '28 Days Later'],
            tally: { Sunshine: 2 }
        }
    }
});

const AppVoting = () => <App><VotingContainer /></App>;
const AppResults = () => <App><ResultsContainer /></App>;
ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/results">Results</Link></li>
                </ul>
                <Route exact path="/" component={AppVoting} />
                <Route path="/results" component={AppResults} />
            </div>
        </Router>
    </Provider>,
    document.getElementById('app')
);