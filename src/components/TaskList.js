import React, { useState } from 'react';
import Task from './Task';

function TaskList({ selectedCategory, tasks, setTasks }) {

  const handleDelete = (text) => {
    const updatedTasks = tasks.filter((task) => task.text !== text);
    setTasks(updatedTasks);
  };

  const filteredTasks =
    selectedCategory === 'All'
      ? tasks : tasks.filter((task) => task.category === selectedCategory)
      ;

  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {filteredTasks.map((task, index) => (
        <Task
          key={index}
          text={task.text}
          category={task.category}
          onDelete={() => handleDelete(task.text)}
        />
      ))}
    </div>
  );
}

export default TaskList;