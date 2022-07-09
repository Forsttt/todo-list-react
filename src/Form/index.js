import { useState } from "react";
import "./style.css";

const Form = (props) => {
  const [newTaskContent, setNewTaskContent] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    props.addNewTask(newTaskContent.trim());
    setNewTaskContent("");
  };

  return (
    <form className="form" onSubmit={onFormSubmit}>
      <input 
        value={newTaskContent}
        onChange={(event) => {setNewTaskContent(event.target.value)}}
        className="form__input"
        name="textbox"
        maxLength="80"
        placeholder="Co jest do zrobienia?"
      />
      <button className="form__button">Dodaj zadanie</button>
    </form>
  );
};
export default Form;