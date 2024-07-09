import React from 'react';
import { Card, Grid, ListItemButton, ListItemText, Checkbox } from '@mui/material';
import '../component/todos.css';

const Todos = ({ todos, deleteTodo }) => {
  const renderTodoList = () => {
    if (todos.length === 0) {
      return <p>You have no todo's left</p>;
    }

    return todos.map((todo) => {
      const isPastDue = new Date(todo.due) < new Date();
      const cardColor = isPastDue ? '#ffcccc' : '#ffffff';

      return (
        <Grid key={todo.id}>
          <Card style={{ marginTop: 10, backgroundColor: cardColor }} data-testid={todo.content}>
            <ListItemButton component="a" href="#simple-list">
              <Checkbox
                style={{ paddingLeft: 0 }}
                color="primary"
                onClick={() => deleteTodo(todo.id)}
              />
              <ListItemText primary={todo.content} secondary={todo.due} />
            </ListItemButton>
          </Card>
        </Grid>
      );
    });
  };

  return <div className="todoCollection" style={{ padding: '10px' }}>{renderTodoList()}</div>;
};

export default Todos;
