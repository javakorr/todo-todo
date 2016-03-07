import { connect } from 'react-redux';
import { deleteTodo } from '../redux/actions';
import TodoList from '../components/TodoList';
import 'immutable';

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onTodoClick: (id) => {
            dispatch(deleteTodo(id))
        }
    }
};

const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default VisibleTodoList;
