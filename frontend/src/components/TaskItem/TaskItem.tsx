import type { Task } from "../../types/Task"

interface TaskItemProps {
    task: Task
    toggleTask: (id: string) => void

}

export default function TaskItem({ task, toggleTask }: TaskItemProps) {
    console.log(task.completed, task)
    return (
        <li className={`task-item ${task.completed ? "done" : ""}`} >
            {task.title}
            <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
            />
        </li >
    )
}