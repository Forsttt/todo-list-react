import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import { useState } from "react";

function App() {
const [hideTasks,setHideTasks] = useState(false);

const [tasks,setTasks] = useState([
  { id: 1, content: "Odrobić lekcje", done: true },
  { id: 2, content: "Wynieść śmieci", done: false },
]);

const toggleHideTasks = () => {
  setHideTasks(hideTasks => !hideTasks);
};

const removeTask = (id) => {
  setTasks(tasks => tasks.filter(task => task.id !== id));
};

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
      extraHeaderContent={
        <Buttons 
          tasks={tasks} 
          hideTasks={hideTasks} 
          toggleHideTasks={toggleHideTasks} 
        />}
      body={
        <Tasks 
          tasks={tasks} 
          hideTasks={hideTasks} 
          removeTask={removeTask}
        />}
    />
  </main>
</>
  );
};

export default App;
