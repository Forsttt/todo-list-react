import "./style.css"
const Buttons = (props) => 
 ( props.tasks.length > 0 && (
  <div className="allTasksButtons"> 
      <button className={`list__allTaskButton `}>{props.hideTaskButtons ? "pokaż ukończone" : "urkyj ukończone"}</button>
      <button className="list__allTaskButton"
      disabled={props.tasks.every(({ done }) => done)}>
        ukończ wszystkie
       </button>
    </div>
    )
  )
  


export default Buttons;