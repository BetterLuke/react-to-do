import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import { addTodo } from '../actions.js';

class AddTodo extends Component {
    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(ev) {
        ev.preventDefault();

        const inputValue = this.state.value;
        if (! inputValue.trim()) {
            return;
        }

        this.props.onAdd(inputValue);
        this.setState({
            value: ''
        })
    }

    onInputChange(event) {
        this.setState({
            value: event.target.value
        })
    }

    render() {
        return (
            <div className="add-todo">
                <form onSubmit={this.onSubmit}>
                    <input className="new-todo" onChange={this.onInputChange} value={this.state.value}/>
                    <button className="add-btn" type="submit">添加</button>
                </form>
            </div>
        )
    }
}

AddTodo.propTypes = {
    onAdd: PropTypes.func.isRequired
};

const mapDispatchToProps = {
    onAdd: addTodo
}

export default connect(null,mapDispatchToProps)(AddTodo);