import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
    // we define the Tasks here to be able to pass them to the other components
    const [ tasks, setTasks ] = useState([
    {
      id: 1,
      text: 'Todo task',
      day: 'Feb 5th at 4:30am',
      reminder: true
    }
    ,
    {
      id: 2,
      text: 'Taskminate Challenge',
      day: 'Jan 15th at 1:30pm',
      reminder: false
    },
    {
      id: 3,
      text: 'All day is gonna work',
      day: 'Dec 24th at 9:50am',
      reminder: true
    },
  ]);
/*
  // fetch date from server
  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = awai
    }

      fetchTasks();
    }
  }, []);

  const fetchTasks = async () => {
      const res = await fetch('http://where-the-server-runs');
      const data = await res.json();

      return data;
  }
*/
  const addTask = (task) => {
    const id = tasks.length + 1;
    const newTask = {id, ...task};
    setTasks([...tasks, newTask]);
  }

  const deleteTask = (id) => {
     setTasks(tasks.filter( (task) => task.id !== id)) // in order not to show the 'deleted' task
   }

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? {...task, reminder: !task.reminder} : task));
  }

  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <Header title="Task Tracker" onAdd={ () => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      { showAddTask && <AddTask onAdd={addTask} /> }
      { tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'No Tasks Scheduled'}
    </div>
  );
}

export default App;
