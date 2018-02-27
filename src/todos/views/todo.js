import React, { Component } from 'react';
import AddTodo from './addTodo.js';
import TodoList from './todoList.js';

export default () => {
    return (
        <div className="todos">
            <AddTodo />
            <TodoList />
        </div>
    );
}