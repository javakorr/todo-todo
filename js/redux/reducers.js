import { combineReducers } from 'redux';
import { addTodo } from './actions';
import { List, Map } from 'immutable';
import constants from './../constants';
import generateTodoId from './../helpers';
import _ from 'lodash';

function todos(state = List(), action) {
    switch (action.type) {
        case constants.ADD_TODO:
            return state.push(Map({
                id: generateTodoId(),
                text: action.payload.text
            }));
        case constants.DELETE_TODO:
            return state.delete(_.findIndex(state.toJS(), (todo) => todo.id === action.payload.id));
        default:
            return state;
    }
}

const todoApp = combineReducers({
    todos
});

export default todoApp;
