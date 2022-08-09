import { useState } from "react";
import "./style.css";

const Form = (props) => {
  const [newTaskContent, setNewTaskContent] = useState("");

  const inputContent = (event) => {
    setNewTaskContent(event.target.value)
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    setNewTaskContent("");
      if (newTaskContent.length > 0 && newTaskContent !== (' ')
    ){
      return props.addNewTask(newTaskContent.trim())
    }
  };

  return (
    <form className="form" onSubmit={onFormSubmit}>
      <input
        value={newTaskContent}
        onChange={inputContent}
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