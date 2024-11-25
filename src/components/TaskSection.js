// src/components/TaskSection.js
import React, { useState } from "react";
import { Form } from "react-bootstrap";

const TaskSection = () => {
  const [pendingTasks, setPendingTasks] = useState([
    { id: 1, text: "Buy groceries", checked: false },
    { id: 2, text: "Finish project report", checked: false },
    { id: 3, text: "Call the bank", checked: false },
  ]);

  const [completedTasks, setCompletedTasks] = useState([
    { id: 1, text: "Read a book", checked: true },
    { id: 2, text: "Clean the house", checked: true },
  ]);

  const handleCheck = (id, taskType) => {
    if (taskType === "pending") {
      setPendingTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === id ? { ...task, checked: !task.checked } : task
        )
      );
    } else if (taskType === "completed") {
      setCompletedTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === id ? { ...task, checked: !task.checked } : task
        )
      );
    }
  };

  return (
    <div className="container p-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <select className="form-select w-auto border-0">
          <option>To Do</option>
          <option>Priority</option>
          <option>Date</option>
        </select>
      </div>

      <div className="mb-3 d-flex align-items-center bg-light rounded position-relative" style={{ background: "linear-gradient(to bottom, #3579371A 30%, #496E4B33 60%)", padding: "3%" }}>
        <div className="flex-grow-1">
          <h5>Add Task</h5>
        </div>

        <div className="icon d-flex position-absolute" style={{ bottom: "10px", left: "10px" }}>
          <i className="fa-regular fa-bell me-3"></i>
          <i className="fa-solid fa-repeat me-3"></i>
          <i className="fa-regular fa-calendar"></i>
        </div>

        <button className="btn btn-light rounded-pill position-absolute" style={{ bottom: "10px", right: "10px", color: "#357937" }}>
          Add Task
        </button>
      </div>

      <h5 className="mb-2">Pending Tasks</h5>
      <div className="mb-3">
        {pendingTasks.map((task) => (
          <div key={task.id} className="d-flex align-items-center mb-2 py-2 border-top border-bottom" style={{ paddingLeft: "10px", paddingRight: "10px", textDecoration: task.checked ? "line-through" : "none" }}>
            <Form.Check className="me-2" checked={task.checked} onChange={() => handleCheck(task.id, "pending")} />
            <span>{task.text}</span>
          </div>
        ))}
      </div>

      <h5 className="mb-2">Completed Tasks</h5>
      <div>
        {completedTasks.map((task) => (
          <div key={task.id} className="d-flex align-items-center mb-2 py-2 border-top border-bottom" style={{ paddingLeft: "10px", paddingRight: "10px", textDecoration: task.checked ? "line-through" : "none" }}>
            <Form.Check className="me-2" checked={task.checked} onChange={() => handleCheck(task.id, "completed")} />
            <span>{task.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskSection;
