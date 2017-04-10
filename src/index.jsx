import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import io from 'socket.io-client';

import remoteActionMiddleware from './remote_action_middleware';
import reducer from './reducer';
import { setState } from './action_creators';
import App from './components/App';
import VotingContainer from './components/Voting';
import ResultsContainer from './components/Results';

const socket = io(`${location.protocol}//${location.hostname}:8090`);
socket.on('state', state =>
    store.dispatch(setState(state))
);

const createStoreWithMiddleware = applyMiddleware(
    remoteActionMiddleware(socket)
)(createStore);
const store = createStoreWithMiddleware(reducer);


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