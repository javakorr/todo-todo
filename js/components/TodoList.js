import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos }) => (
    <ul>
        {todos.map(todo =>
            <Todo key={todo.get('id')} text={todo.get('text')} />
        )}
    </ul>
);

export default TodoList;
