import React from "react";
import shortid from "shortid";
import { Modal, ModalHeader, ModalBody } from "reactstrap";

import ListView from "../components/list-view";
import TableView from "../components/table-view";
import Controller from "../components/controller";
import CreateToDoForm from "../components/createtodo";

class Todos extends React.Component {
  state = {
    todos: [
      {
        id: "lksdjfiuh",
        text: "some text",
        description: "description of text",
        time: new Date(),
        isSelected: false,
        isCompleted: false,
      },
      {
        id: "lk454fiuh",
        text: "some another text",
        description: "description of text",
        time: new Date(),
        isSelected: false,
        isCompleted: false,
      },
      {
        id: "lk453432uh",
        text: "Brand new text",
        description: "description of text",
        time: new Date(),
        isSelected: false,
        isCompleted: false,
      },
    ],
    searchTerm: "",
    isOpenTodoForm: false,
    view: "list",
    filter: "All",
  };

  toggleSelect = (todoId) => {
    const todos = [...this.state.todos];
    const todo = todos.find((todo) => todo.id === todoId);
    todo.isSelected = !todo.isSelected;
    this.setState({ todos });
  };

  toggleComplete = (todoId) => {
    const todos = [...this.state.todos];
    const todo = todos.find((todo) => todo.id === todoId);
    todo.isCompleted = !todo.isCompleted;
    this.setState({ todos });
  };

  handleSearch = (value) => {
    this.setState({ searchTerm: value });
  };

  toggleForm = () => {
    this.setState({
      isOpenTodoForm: !this.state.isOpenTodoForm,
    });
  };

  createTodo = (todo) => {
    todo.id = shortid.generate();
    todo.time = new Date();
    todo.isSelected = false;
    todo.isCompleted = false;

    let todos = [todo, ...this.state.todos];

    this.setState({ todos });
    this.toggleForm();
  };

  handleShortTask = (filter) => {
    this.setState({ filter });
  };

  handleViewControl = (value) => {
    this.setState({ view: value });
  };

  handleClearCompleted = () => {
    const todos = this.state.todos.filter((todo) => !todo.isCompleted);
    this.setState({ todos });
  };

  handleClearSelected = () => {
    const todos = this.state.todos.filter((todo) => !todo.isSelected);
    this.setState({ todos });
  };

  handleReset = () => {
    this.setState({
      todos: [
        {
          id: "lksdjfiuh",
          text: "some text",
          description: "description of text",
          time: new Date(),
          isSelected: false,
          isCompleted: false,
        },
        {
          id: "lk454fiuh",
          text: "some another text",
          description: "description of text",
          time: new Date(),
          isSelected: false,
          isCompleted: false,
        },
        {
          id: "lk453432uh",
          text: "Brand new text",
          description: "description of text",
          time: new Date(),
          isSelected: false,
          isCompleted: false,
        },
      ],
      searchTerm: "",
      isOpenTodoForm: false,
      view: "list",
      filter: "All",
    });
  };

  performSearch = () => {
    return this.state.todos.filter((todo) =>
      todo.text.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    );
  };

  filterTodos = (todos) => {
    const { filter } = this.state;
    if (filter === "Completed") {
      return todos.filter((todo) => todo.isCompleted);
    } else if (filter === "Running") {
      return todos.filter((todo) => !todo.isCompleted);
    } else {
      return todos;
    }
  };

  getView = () => {
    let todos = this.performSearch();
    todos = this.filterTodos(todos);
    return this.state.view === "list" ? (
      <ListView
        todos={todos}
        toggleSelect={this.toggleSelect}
        toggleComplete={this.toggleComplete}
      />
    ) : (
      <TableView
        todos={todos}
        toggleSelect={this.toggleSelect}
        toggleComplete={this.toggleComplete}
      />
    );
  };
  render() {
    return (
      <div>
        <h1 className='text-center my-3 display-3'>Stack Todos</h1>
        <Controller
          term={this.state.searchTerm}
          handleSearch={this.handleSearch}
          toggleForm={this.toggleForm}
          handleShortTask={this.handleShortTask}
          view={this.state.view}
          handleViewControl={this.handleViewControl}
          handleClearCompleted={this.handleClearCompleted}
          handleClearSelected={this.handleClearSelected}
          handleReset={this.handleReset}
        />
        <div>{this.getView()}</div>
        <div>
          <Modal isOpen={this.state.isOpenTodoForm} toggle={this.toggleForm}>
            <ModalHeader toggle={this.toggleForm}>
              Create New Todo Item
            </ModalHeader>
            <ModalBody>
              <CreateToDoForm createTodo={this.createTodo} />
            </ModalBody>
          </Modal>
        </div>
      </div>
    );
  }
}
export default Todos;
