import { useState } from "react"

function App() {
  const [tasks, setTasks] = useState([{ title: "titulo1", id: "1", done: false }, { title: "titulo2", id: "2", done: false }, { title: "titulo3", id: "3", done: false }])




  return (
    <main>
      <h1>To-Do App</h1>
      <section>
        {tasks.map((task) => {
          return <article key={task.id}>
            <h3>{task.title}</h3>
          </article>

        })}
      </section>
    </main>
  )
}

export default App
