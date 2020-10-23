import React from "react";
import "../TodoList/TodoList.css";
//import HandleStatus from "../HandleStatus/HandleStatus";

export default function TodoList(props) {
  return (
    <ul>
      {props.todos.map((todo, index) => (
        <li key={index}>
          <span style={{ color: props.stat }}>{todo}</span>
          <button className="very" onClick={props.very.bind(this, index)}>
            Very Urgent
          </button>
          <button className="simi" onClick={props.simi.bind(this, index)}>
            Simi-Urgent
          </button>
          <button className="not" onClick={props.not.bind(this, index)}>
            Not Urgent
          </button>
          <button className="edit" onClick={props.edit.bind(this, index)}>
            Edit Me
          </button>
          <button className="delete" onClick={props.delete.bind(this, index)}>
            Delete Me
          </button>
        </li>
      ))}
    </ul>
  );
}
