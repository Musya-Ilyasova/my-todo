import React, {useContext, useState, useEffect} from "react";
import TodoList from "../todoList/TodoList"
import DataContext from "../dataContext/DataContext";
import Container from '@mui/material/Container';
import {
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import Collapse from '@material-ui/core/Collapse';
import { ListItemButton } from '@mui/material';

const {Provider} = DataContext;

const DaysList = () => {
  const [open, setOpen] = useState(false);
  const context = useContext(DataContext);


  const handleClick = () => {
    setOpen(open => !open)
  }

  const items = context.toDoListState.map((item, i) => {
    return (
      <Provider key={i} value={item.tasks} >
        <ListItem>
          <div className="todo-item__top">
            <ListItemText component={'h2'} className="days-list-item__title">{item.date}</ListItemText>
            <ListItemButton className="days-list-item__down" onClick={handleClick}>Down</ListItemButton>
          </div>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <TodoList className={open ? 'open' : ''}/>
          </Collapse>
        </ListItem>
      </Provider>
    )
  });
  return (
    <Container className="days-list"
                sx={{ borderRadius: '30px',
                      paddingTop: '13px',
                      background: '#282828',
                      marginTop: '20px' }}
                maxWidth={'xs'}>
      <List>
        {items}
      </List>
    </Container>
  )
}

export default DaysList
