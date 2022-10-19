import {useState, useContext} from "react";
import {
  ListItem,
  Grid,
  Paper
  // Checkbox,
  // IconButton,
  // ListItemText,
  // ListItemSecondaryAction
} from "@material-ui/core";
import './todoListItem.scss';
import DataContext from "../dataContext/DataContext";

const TodoListItem = () => {
  const tasks = useContext(DataContext);
  return (
    tasks.map((task, i) => {
      return (
        <Grid
          xs={12}
          // className={`${gridClass}`}
          item
          key={i}
          // key={this.props.index}
          // ref={this.gridRef}
        >
        <ListItem key={i} className="todo-item">
            <div className="tasks-item__left">
            <h3 className="tasks-item__title">
            {task.name}
            </h3>
            <p className="tasks-item__descr">
            {task.description}</p>
          </div>
          <div className="tasks-item__right">
            <input type="radio" name="" id="" />
          </div>
        </ListItem >
        </Grid>
      )
    })
  )




}

export default TodoListItem;
