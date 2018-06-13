import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App';
import 'normalize.css'
import registerServiceWorker from './registerServiceWorker';
// R E D U X
import { Provider } from 'react-redux'
import { createStore } from 'redux';


import {allReducers} from './reducers/index';

const store = createStore (allReducers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
