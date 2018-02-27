import React, { Component } from 'react';
import connect from 'react-redux';
import PropTypes from 'prop-types';

import { addTodo } from '../actions.js';

class AddTodo extends Component {
    constructor(props, connect) {
        super(props, connect);

        this.onSubmit = this.onSubmit.bind(this);
        this.refInput = this.refInput.bind(this);
    }

    refInput(node) {
        this.input = node;
    }

    onSubmit(ev) {
        ev.preventDefault();

        const input = this.input;
        if (!input.value.trim()) {
            return;
        }

        this.props.onAdd(input.value);
        input.value = '';
    }

    render() {
        return (
            <div className="add-todo">
                <from onSubmit={this.onSubmit}>
                    <input className="new-todo" ref={this.refInput}/>
                    <button className="add-btn" type="submit">添加</button>
                </from>
            </div>
        )
    }
}

AddTodo.propTypes = {
    onAdd: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => {
    return {
        onAdd: (text) => {
            dispatch(addTodo(text));
        }
    }
}

export default connect(null,mapDispatchToProps)(AddTodo);