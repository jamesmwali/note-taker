import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import rootReducer from './redux/reducers';
import {applyMiddleware, createStore} from 'redux'; // ? Create a redux store;
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import Login from './components/login';

// * Redux store imports

// ? Create a redux store
// ! Store requires reducers -> actions
// * applyMiddleware requires thunk

// ! Step 1 - Create store variable
const store = createStore(rootReducer,
    composeWithDevTools(applyMiddleware(thunk)));

// ? Creating Navigation

const Header = () => (
    <nav className="navbar navbar-default">
      <div className="container-fluid">

        <div className="navbar-header">

          <button type="button" className="navbar-toggle" data-toggle="collapse"
                  data-target="#myNavBar">
            <span className="icon-bar"/>
            <span className="icon-bar"/>
            <span className="icon-bar"/>
          </button>
          <Link className="navbar-brand" to="/">DIARY 2019</Link>
        </div>

        <div className="collapse navbar-collapse" id="myNavBar">
          <ul className="nav navbar-nav navbar-right">
            <li><Link to="/login">Login</Link></li>
          </ul>
        </div>
      </div>

    </nav>
);

// ! Step 2 - provide the store reducers to react

ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Header/>
          <Switch>
            <Route path="/" render={() =>
                <App/>
            } exact={true}/>

            <Route path="/login" render={() =>
                <Login/>
            } exact={true}/>

          </Switch>
        </div>

      </BrowserRouter>
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
