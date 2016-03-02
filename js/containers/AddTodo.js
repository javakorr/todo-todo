import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../redux/actions'

let AddTodo = ({ dispatch }) => {
    let input;

    return (
        <div>
            <input ref={ node => { input = node; } }/>
            <button onClick={() => {
                const todoText = input.value.trim();
                if (!todoText) {
                    return false;
                }
                dispatch(addTodo(todoText));
                input.value = '';
            }}>Add Todo</button>
        </div>
    );
};

AddTodo = connect()(AddTodo);

export default AddTodo;
