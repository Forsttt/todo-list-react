import { useState } from "react";
import "./style.css";

const Form = ({ addNewTask }) => {
  const [newTaskContent, setNewTaskContent] = useState("");

  const inputContent = ({ target }) => {
    setNewTaskContent(target.value)
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (newTaskContent.trim() === "") {
      return;
    }
    setNewTaskContent("");
    addNewTask(newTaskContent.trim())
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