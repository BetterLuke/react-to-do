import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import ToDoApp from './TodoApp.js'
import store from './Store.js'


ReactDOM.render(
    <Provider store={store}>
        <ToDoApp />
    </Provider>,
    document.getElementById('root')
);
