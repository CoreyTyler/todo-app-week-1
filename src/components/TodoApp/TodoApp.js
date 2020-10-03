import React, { Component } from "react";

class TodoApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isClicked: false,
      text: "",
      todos: [
        {
          id: "001",
          text: "Pandas",
        },
        {
          id: "002",
          text: "Monkeys",
        },
        {
          id: "003",
          text: "Bunnies",
        },
      ],
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick() {
    this.setState({
      todos: [...this.state.todos, this.state.text],
      text: "",
    });

    console.log(this.state.todos);
  }

  handleChange(evt) {
    this.setState({
      text: evt.target.value,
    });
  }

  handleDelete(evt, todo) {
    const filteredTodos = this.state.todos.filter((t) => t.id != todo.id);

    this.setState({
      todos: filteredTodos,
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.text || "Hello World"}</h1>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.text}
        />
        <button onClick={this.handleClick}>Click Me</button>
        <ul>
          {this.state.todos.map((todo, index) => (
            <li key={todo.id}>
              <span>{todo.text}</span>
              <button onClick={(evt) => this.handleDelete(evt, todo)}>X</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoApp;
