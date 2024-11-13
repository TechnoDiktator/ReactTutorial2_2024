import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import {Provider} from 'react-redux'
//so the provider is similar to the context provider that is 
//present in react


import store from './store';




//this is the highest level till which we can provide
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Provider store={store}>
<App />
</Provider>

);












