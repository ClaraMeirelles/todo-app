import { Form } from "./components/Form/Form"
import TaskList from "./components/TaskList/TaskList"
import { useTasks } from "./hooks/useTasks"
import './App.css'
import { Toaster } from "react-hot-toast"

function App() {
  const { tasks, handleAddTask, handleMarkAsDone, handleSearch, requestTasks, isFiltered } = useTasks()
  return (
    <main>
      <h1>To-Do App</h1>
      <Form
        onSubmit={handleAddTask}
        placeholder="Digite aqui..."
        buttonLabel="Criar"
        initialValue="" />
      <section>
        <Form
          onSubmit={handleSearch}
          placeholder="Buscar tarefa..."
          buttonLabel="Buscar"
        />
        {isFiltered && <button onClick={requestTasks}>Ver todas as tarefas</button>}
        <TaskList tasks={tasks} toggleTask={handleMarkAsDone} />
      </section>
      <Toaster position="top-center" />
    </main>
  )
}

export default App
