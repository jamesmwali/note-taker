import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import rootReducer from './redux/reducers';
import {createStore, applyMiddleware} from 'redux'; // ? Create a redux store;
import {Provider} from 'react-redux';
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension';

// * Redux store imports

// ? Create a redux store
// ! Store requires reducers -> actions
// * applyMiddleware requires thunk

// ! Step 1 - Create store variable
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

// ! Step 2 - provide the store reducers to react

ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
