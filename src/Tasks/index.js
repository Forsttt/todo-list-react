import "./style.css";

const Tasks = (props) => (
<ul className="list">
  {props.tasks.map(task => (
    <li 
      key={task.id} 
      className={`list__item
       ${task.done && props.hideTasks ? "list__item--hidden" : ""}`}>
    <button 
      onClick={() => props.toggleTaskDone(task.id)}
      className={`list__button`}> 
      {task.done ? "✔" : ""}
    </button>
    <span
      className={`list__content ${task.done ? "markedAsDone" : " "}`}>
      {task.content}
    </span>
    <button
      onClick={() => props.removeTask(task.id)}
      className={`list__button list__button--delete`}>🗑
    </button>
    </li>
))}
</ul>
);

export default Tasks;

