import "./style.css"
const Buttons = ({ tasks, hideTasks, toggleHideTasks, setAllDone, }) =>
(tasks.length > 0 && (
  <div className="allTasksButtons">
    <button
      onClick={toggleHideTasks}
      className={`list__allTaskButton`}>
      {hideTasks ? "Pokaż ukończone" : "Ukryj ukończone"}
    </button>
    <button
      onClick={setAllDone}
      className="list__allTaskButton"
      disabled={tasks.every(({ done }) => done)}>
      Ukończ wszystkie
    </button>
  </div>
));

export default Buttons;