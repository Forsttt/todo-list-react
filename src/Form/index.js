import "./style.css";

const Form = () => (
  <form className="form">
        <input className="form__input" name="textbox" maxLength="80" placeholder="Co jest do zrobienia?"/>
        <button className="form__button">Dodaj zadanie</button>
      </form>
)
export default Form;