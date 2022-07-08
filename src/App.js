import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";

const tasks = [
  { id: 1, content: "Odrobić lekcje", done: true },
  { id: 2, content: "Wynieść śmieci", done: false },
];

const hideTasks = false;

function App() {
return (
  <>
    <Header title="Lista zadań"/>
    <main>
      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
      />
      <Section
        title="Lista zadań"
        extraHeaderContent={<Buttons tasks={tasks} hideTasks={hideTasks} />}
        body={<Tasks tasks={tasks} hideTasks={hideTasks} />}
      />
    </main>
  </>
  );
};

export default App;
