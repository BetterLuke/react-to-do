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
                    key={item.id} //keyd的用法 帮助一个父组件下多个相同组件的更新性能优化，当key不变的时候，只会触发组件的更新行为，并不会触发重载
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