import { Form } from "./components/Form/Form"
import TaskList from "./components/TaskList/TaskList"
import { useTasks } from "./hooks/useTasks"

function App() {
  const { tasks, handleAddTask, handleMarkAsDone, handleSearch, requestTasks } = useTasks()



  return (
    <main>
      <h1>To-Do App</h1>
      <Form
        onSubmit={handleAddTask}
        placeholder="Digite aqui..."
        buttonLabel="Enviar"
        initialValue="" />
      <section>
        <Form
          onSubmit={handleSearch}
          placeholder="Buscar tarefa..."
          buttonLabel="Buscar"
        />
        <TaskList tasks={tasks} onMarkAsDone={handleMarkAsDone} />
        <button onClick={requestTasks}>Ver todas as tarefas</button>
      </section>
    </main>
  )
}

export default App
