import "./style.css";

const Tasks = ({ tasks, toggleTaskDone, removeTask, hideTasks }) => (
  <ul className="list">
    {tasks.map(task => (
      <li
        key={task.id}
        className={`list__item
       ${task.done && hideTasks ? "list__item--hidden" : ""}`}>
        <button
          onClick={() => toggleTaskDone(task.id)}
          className={`list__button`}>
          {task.done ? "✔" : ""}
        </button>
        <span
          className={`list__content ${task.done ? "markedAsDone" : " "}`}>
          {task.content}
        </span>
        <button
          onClick={() => removeTask(task.id)}
          className={`list__button list__button--delete`}>🗑
        </button>
      </li>
    ))}
  </ul>
);

export default Tasks;

