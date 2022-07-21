import React from "react";
import PropTypes from "prop-types";

import { Table, Input, Button } from "reactstrap";

const RowItem = ({ todo, toggleSelect, toggleComplete }) => {
  return (
    <tr>
      <td scope='row'>
        <Input
          type='checkbox'
          id={todo.id}
          checked={todo.isSelected}
          onChange={() => toggleSelect(todo.id)}
        />
      </td>
      <td>{todo.time.toDateString()}</td>
      <td>
        <h5>{todo.text}</h5>
      </td>
      <td className='text-center'>
        <Button
          color={todo.isCompleted ? "danger" : "success"}
          onClick={() => toggleComplete(todo.id)}
        >
          {todo.isCompleted ? "Completed" : "Running"}
        </Button>
      </td>
    </tr>
  );
};

RowItem.propTypes = {
  todo: PropTypes.object.isRequired,
  toggleSelect: PropTypes.func.isRequired,
  toggleComplete: PropTypes.func.isRequired,
};

const TableView = ({ todos, toggleComplete, toggleSelect }) => {
  return (
    <Table bordered hover responsive className='table'>
      <thead>
        <tr className='text-center'>
          <th>#</th>
          <th>Date</th>
          <th>To Do List</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {todos.map((todo) => (
          <RowItem
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            toggleSelect={toggleSelect}
          />
        ))}
      </tbody>
    </Table>
  );
};

TableView.propTypes = {
  todos: PropTypes.array.isRequired,
  toggleSelect: PropTypes.func.isRequired,
  toggleComplete: PropTypes.func.isRequired,
};

export default TableView;
