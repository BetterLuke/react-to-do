import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {selectVisibleTodos} from '../selector.jsx'

import TodoItem from './todoItem.jsx';

const TodoList = ({todos, onToggle, onRemoveTodo}) => {
    return (
        <ul className="todo-list">
        {
            todos.map((item) => (
                <TodoItem
                    key={item.id}
                    id={item.id}
                    text={item.text}
                    completed={item.completed}
                />
            ))
        }
        </ul>
    );
};

TodoList.propTypes = {
    todos: PropTypes.array.isRequired,
};

// const selectVisibleTodos = (todos, filter) => {
//     switch (filter) {
//         case FilterTypes.ALL:
//             return todos;
//         case FilterTypes.COMPLETED:
//             return todos.filter((item) => item.completed);
//         case FilterTypes.UNCOMPLETED:
//             return todos.filter((item) => !item.completed);
//         default:
//             throw new Error('unsupport filter!');
//     }
// }

const mapStateToProps = (state) => ({
    todos: selectVisibleTodos(state)
})

export default connect(mapStateToProps)(TodoList);