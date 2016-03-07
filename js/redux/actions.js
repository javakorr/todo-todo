import constants from './../constants';

export function addTodo(text) {
    return {
        type: constants.ADD_TODO,
        payload: {
            text
        }
    };
}

export function deleteTodo(id) {
    return {
        type: constants.DELETE_TODO,
        payload: {
            id
        }
    };
}
