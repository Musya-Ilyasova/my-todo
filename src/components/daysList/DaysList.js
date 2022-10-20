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
  const [openList, setOpen] = useState([false, false, false]);
  const context = useContext(DataContext);


  const handleClick = (i) => {
    const newOpenList = [...openList]
    newOpenList[i] = !newOpenList[i];
    setOpen(openList => [...newOpenList])
  }

  const items = context.toDoListState.map((item, i) => {
    return (
      <Provider key={i} value={item.tasks} >
        <ListItem style={{flexDirection: 'column'}}>
          <div className="todo-item__top">
            <ListItemText component='h2' className="days-list-item__title">{item.date}</ListItemText>
            {i === 0 ? null : <ListItemButton className="days-list-item__down" onClick={() => handleClick(i)}>Down</ListItemButton>}
          </div>
          {i === 0 ? 
            <TodoList className='open today'/> : 
            <Collapse in={openList[i]} timeout="auto" unmountOnExit>
              <TodoList className={openList[i] ? 'open' : ''}/>
            </Collapse>
          }
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
