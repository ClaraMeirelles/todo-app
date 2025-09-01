
import type { TaskListProps } from "./TaskList.types"

export default function TaskList({ tasks, onMarkAsDone }: TaskListProps) {
    return (
        <ul>
            {tasks.map((task) => {
                return <article key={task.id}>
                    <h3>{task.title}</h3>
                </article>

            })}
        </ul>
    )
}