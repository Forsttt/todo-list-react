import "./style.css"
const Buttons = (props) => 
 (props.tasks.length > 0 && (
  <div className="allTasksButtons"> 
    <button
      onClick={props.toggleHideTasks} 
      className={`list__allTaskButton`}>
      {props.hideTasks ? "Pokaż ukończone" : "Ukryj ukończone"}
    </button>
    <button
      onClick={props.setAllDone}
      className="list__allTaskButton"
      disabled={props.tasks.every(({ done }) => done)}>
      Ukończ wszystkie
    </button>
  </div>
));
  
export default Buttons;