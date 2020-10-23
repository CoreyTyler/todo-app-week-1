import React, { Component } from "react";
import TodoList from "../TodoList/TodoList";
import "../TodoApp/TodoApp.css";

class TodoApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isClicked: false,
      text: "",
      todos: [],
      status: "",
      urgency: "",
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.veryUrgent = this.veryUrgent.bind(this);
    this.simiUrgent = this.simiUrgent.bind(this);
    this.notUrgent = this.notUrgent.bind(this);
  }

  handleClick(evt) {
    evt.preventDefault();
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

  handleDelete(index) {
    const list = this.state.todos.splice(index, 1);
    this.setState({
      list,
    });
  }

  handleEdit(index) {
    this.setState({
      todos: [...this.state.text],
      text: this.state.todos[index],
    });
  }

  veryUrgent() {
    this.setState({
      status: "red",
      urgency: "Last Entry Very Urgent",
    });
    console.log(this.state.status);
    console.log(this.state.urgency);
  }

  simiUrgent() {
    this.setState({
      status: "yellow",
      urgency: "Last Entry Simi-Urgent",
    });
    console.log(this.state.status);
    console.log(this.state.urgency);
  }

  notUrgent() {
    this.setState({
      status: "green",
      urgency: "Last Entry Not Urgent",
    });
    console.log(this.state.status);
    console.log(this.state.urgency);
  }

  render() {
    return (
      <div className="rendered">
        <h1>{this.state.text || "ToDo List"}</h1>
        <input
          //type="text"
          onChange={this.handleChange}
          value={this.state.text}
        />
        <button className="submit" onClick={this.handleClick}>
          Submit
        </button>
        <TodoList
          todos={this.state.todos}
          delete={this.handleDelete}
          edit={this.handleEdit}
          very={this.veryUrgent}
          simi={this.simiUrgent}
          not={this.notUrgent}
          stat={this.state.status}
        />
        <h3 style={{ color: this.state.status }}>
          {this.state.urgency || "Urgency Status Here"}
        </h3>
      </div>
    );
  }
}

export default TodoApp;
