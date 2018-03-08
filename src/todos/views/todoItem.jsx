import React,{Component} from 'react';
import PropTypes from 'prop-types'
import {toggleTodo, removeTodo} from '../actions.js';
import { connect } from 'react-redux'

// const TodoItem = ({onToggle, onRemove, completed, text}) => {
//     const checkedProp = completed ? {checked: true} : {};
//     return (
//         <li
//             className="todo-item"
//             style={{
//                 textDecoration: completed ? 'line-through' : 'none'
//             }}
//         >
//             <input className="toggle" type="checkbox" {...checkedProp} readOnly onClick={onToggle} />
//             <label className="text">{text}</label>
//             <button className="remove" onClick={onRemove}>x</button>
//         </li>
//     )
// }

class TodoItem extends Component {
    constructor() {
        super(...arguments)
        console.log('enter TodoItem constructor: ' + this.props.text)
    }
    render() {
        const {completed, text, onRemove ,onToggle} = this.props
        console.log('enter TodoItem render: ' + text);
        
        return (
            <li
                className="todo-item"
                style={{
                    textDecoration: completed ? 'line-through' : 'none'
                }}
            >
                <input type="checkbox" className="toggle" readOnly checked={completed ? "checked" : ""} onClick={onToggle}/>
                <label className="text">{text}</label>
                <button className="remove" onClick={onRemove}>x</button>
            </li>
        )
    }
}

TodoItem.propTypes = {
    onToggle: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const id = ownProps.id; //这一步必修要用解构么
    return {
        onToggle : () => dispatch(toggleTodo(id)),
        onRemove: () => dispatch(removeTodo(id))
    }
};


export default connect(null,mapDispatchToProps)(TodoItem)