import type { Task } from "../../types/Task"

interface TaskItemProps {
    task: Task
    onMarkAsDone: (id: string) => void

}

export default function TaskItem({ task, onMarkAsDone }: TaskItemProps) {
    console.log(task.completed, task)
    return (
        <li className={`task-item ${task.completed ? "done" : ""}`} >
            {task.title}
            < button onClick={() => onMarkAsDone(task.id)
            }> {task.completed ? "feito" : "Marcar Feito"}</ button>
        </li >
    )
}