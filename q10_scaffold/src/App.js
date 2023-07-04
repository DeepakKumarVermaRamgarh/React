import "./styles.css";
import { Component } from "react";
import { List } from "./List";
import { Form } from "./Form";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [{ text: "working" }]
    };
  }

  handleAdd = (newTodo) => {
    this.setState(prevState => ({
      todos: [newTodo, ...prevState.todos]
    }));
  };

  handleRemove = (index) => {
    this.setState(prevState => {
      const updatedTodos = [...prevState.todos];
      updatedTodos.splice(index, 1);
      return { todos: updatedTodos };
    });
  };

  render() {
    return (
      <div className="App">
        <span>Todo</span>
        <Form handleAdd={this.handleAdd} />
        <List todos={this.state.todos} handleRemove={this.handleRemove} />
      </div>
    );
  }
}
