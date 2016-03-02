import { combineReducers } from 'redux';
import { addTodo } from './actions';
import { List, Map } from 'immutable';
import ADD_TODO from './../constants';
import generateTodoId from './../helpers'

function todos(state = List(), action) {
    switch (action.type) {
        case ADD_TODO:
            return state.push(Map({
                id: generateTodoId(),
                text: action.payload.text
            }));
        default:
            return state;
    }
}

const todoApp = combineReducers({
    todos
});

export default todoApp;
