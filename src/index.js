import React from 'react';
import ReactDOM from 'react-dom';
import './style/main.css'
import './utils/setRem'
import Router from './router/router'
import * as serviceWorker from './serviceWorker';
import initReactFastclick  from 'react-fastclick';
import {Provider} from 'react-redux'
import store from './store/store'
initReactFastclick();


const Render=<Provider store={store}><Router /></Provider>

ReactDOM.render(Render, document.getElementById('root'));

serviceWorker.unregister();
