import TodoListItem from "../todoListItem/TodoListItem"
import './todoList.scss'
import {
  List,
} from "@material-ui/core";

const TodoList = () => {
  return (
    <List className="todo">
      <TodoListItem/>
    </List>
  )
}

export default TodoList;
