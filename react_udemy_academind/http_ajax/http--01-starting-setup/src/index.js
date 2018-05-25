import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker'
import axios from 'axios';

// this will affect all others because it is global here in index.js
axios.interceptors.request.use(request =>{
    console.log(request);
    // you need to always return the request, otherwise, you're blocking the request config
    //Edit request config
    return request
}, error=> {
    console.log(error);
    return Promise.reject(error);
});

axios.interceptors.response.use(response =>{
    console.log(response);
    // you need to always return the request, otherwise, you're blocking the request config
    //Edit request config
    return response
}, error=> {
    console.log(error);
    return Promise.reject(error);
})

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
