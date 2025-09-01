import { Form } from "./components/Form/Form"
import TaskList from "./components/TaskList/TaskList"
import { useTasks } from "./hooks/useTasks"

function App() {
  const { tasks, handleAddTask, handleMarkAsDone } = useTasks()



  return (
    <main>
      <h1>To-Do App</h1>
      <Form onAddTask={handleAddTask} />
      <section>
        <TaskList tasks={tasks} onMarkAsDone={handleMarkAsDone} />
      </section>
    </main>
  )
}

export default App
