import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import ToDoApp from './TodoApp.js'


ReactDOM.render(
    <Provider>
        <ToDoApp />
    </Provider>,
    document.getElementById('root')
);
