import React from "react";
import PropTypes from "prop-types";
import { ListGroup, ListGroupItem, Input, Button } from "reactstrap";

const ListItem = ({ todo, toggleSelect, toggleComplete }) => {
  return (
    <ListGroupItem className='d-flex align-items-center'>
      <Input
        type='checkbox'
        id={todo.id}
        checked={todo.isSelected}
        onChange={() => toggleSelect(todo.id)}
      />
      <div className='mx-3 flex-grow-1'>
        <h4>{todo.text}</h4>
        <p>{todo.time.toDateString()}</p>
      </div>
      <Button
        color={todo.isCompleted ? "danger" : "success"}
        onClick={() => toggleComplete(todo.id)}
      >
        {todo.isCompleted ? "Completed" : "Running"}
      </Button>
    </ListGroupItem>
  );
};

ListItem.propTypes = {
  todo: PropTypes.object.isRequired,
  toggleSelect: PropTypes.func.isRequired,
  toggleComplete: PropTypes.func.isRequired,
};

const ListView = ({ todos, toggleSelect, toggleComplete }) => {
  return (
    <ListGroup>
      {todos.map((todo) => (
        <ListItem
          key={todo.id}
          todo={todo}
          toggleSelect={toggleSelect}
          toggleComplete={toggleComplete}
        />
      ))}
    </ListGroup>
  );
};

ListView.propTypes = {
  todos: PropTypes.array.isRequired,
  toggleSelect: PropTypes.func.isRequired,
  toggleComplete: PropTypes.func.isRequired,
};

export default ListView;
