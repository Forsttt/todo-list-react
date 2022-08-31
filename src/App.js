import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import { useState } from "react";

function App() {
  const [hideTasks, setHideTasks] = useState(false);

  const [tasks, setTasks] = useState([

  ]);

  const toggleHideTasks = () => {
    setHideTasks(hideTasks => !hideTasks);
  };

  const removeTask = (id) => {
    setTasks(tasks => tasks.filter(task => task.id !== id));
  };

  const toggleTaskDone = (id) => {
    setTasks(tasks => tasks.map(task => {
      if (task.id === id) {
        return { ...task, done: !task.done };
      };

      return task;
    }));
  };

  const setAllDone = () => {
    setTasks(tasks => tasks.map(task => ({
      ...task,
      done: true,
    })));
  };

  const addNewTask = (newTaskContent) => {
    setTasks(tasks => [
      ...tasks,
      {
        content: newTaskContent,
        done: false,
        id: tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1
      },
    ])
  };

  return (
    <>
      <Header title="Lista zadań" />
      <main>
        <Section
          title="Dodaj nowe zadanie"
          body={<Form addNewTask={addNewTask} />}
        />
        <Section
          title="Lista zadań"
          extraHeaderContent={
            <Buttons
              tasks={tasks}
              hideTasks={hideTasks}
              toggleHideTasks={toggleHideTasks}
              setAllDone={setAllDone}
            />}
          body={
            <Tasks
              tasks={tasks}
              hideTasks={hideTasks}
              removeTask={removeTask}
              toggleTaskDone={toggleTaskDone}
            />}
        />
      </main>
    </>
  );
};

export default App;
