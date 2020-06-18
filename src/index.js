import React from 'react';
import ReactDOM from 'react-dom';
import "./styles/App.css";
import App from './components/App';
import restaurentReducer from './store/reducers';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {createStore, applyMiddleware, combineReducers} from 'redux';

const store = createStore(combineReducers({restaurentReducer}),applyMiddleware(thunk))

ReactDOM.render(
  <Provider store = {store}>
    <App className = "App" />
  </Provider>,
  document.getElementById('root')
);

