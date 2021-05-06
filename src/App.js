import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'


const App = () => {
    const [showAddTask, setShowAddTask] = useState(false)

    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: 'Netball Match',
            day: 'January 5th at 4.30pm',
            reminder: true,
        },
        {
            id: 2,
            text: 'Networking Coffee',
            day: 'Feb 6th at 1:30pm',
            reminder: true,
        },
        {
            id: 3,
            text: 'Haircut',
            day: 'Feb 8th at 6:30pm',
            reminder: true,
        },
        {
            id: 4,
            text: 'Meet Anna & Rachel',
            day: 'Feb 5th at 2:20pm',
            reminder: false,
        },
        {
            id: 5,
            text: 'Buy drinks for flat party',
            day: 'Feb 7th at 5:30pm',
            reminder: false,
        },
        {
            id: 6,
            text: 'Flat viewing',
            day: 'Feb 7th at 7:00pm',
            reminder: false,
        },

    ])

// Add Task

const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000) + 1
    console.log(id)
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
}

// Delete Tasks
const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
}

//Toggle Reminder

const toggleReminder = (id) => {
    setTasks(tasks.map((task) =>
    task.id === id ? { ...task, reminder:
    !task.reminder } : task
)
)
}

  return (
    <div className="container" style={{backgroundColor: "white"}}>
      <Header
      onAdd={() => setShowAddTask
          (!showAddTask)}
          showAdd={showAddTask}
          />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ?
          <Tasks tasks={tasks}
          onDelete={deleteTask} onToggle={toggleReminder} /> : 'No Tasks To Show'}
    </div>
  );
}

export default App;
