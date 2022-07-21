import React from "react";
import PropTypes from "prop-types";

import { Form, FormGroup, Input, Button } from "reactstrap";

class CreateToDoForm extends React.Component {
  state = {
    text: "",
    description: "",
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.createTodo(this.state);
    event.target.reset();
    this.setState({ text: "", description: "" });
  };
  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormGroup>
          <label> Enter Task </label>
          <Input
            type='text'
            placeholder='Write some task'
            name='text'
            value={this.state.text}
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup>
          <label> Describe Task </label>
          <Input
            type='textarea'
            placeholder='Describe task'
            name='description'
            value={this.state.description}
            onChange={this.handleChange}
          />
        </FormGroup>
        <Button type='submit' color='primary'>
          Create Task
        </Button>
      </Form>
    );
  }
}

CreateToDoForm.propTypes = {
  createTodo: PropTypes.func.isRequired,
};

export default CreateToDoForm;
