import { useState } from "react"
import TaskList from "./components/TaskList/TaskList"

function App() {
  const [tasks, setTasks] = useState([{ title: "titulo1", id: "1", done: false }, { title: "titulo2", id: "2", done: false }, { title: "titulo3", id: "3", done: false }])




  return (
    <main>
      <h1>To-Do App</h1>
      <section>
        <TaskList tasks={tasks} />
      </section>
    </main>
  )
}

export default App
