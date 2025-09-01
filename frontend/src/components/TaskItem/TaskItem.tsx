import type { Task } from "../../types/Task"

interface TaskItemProps {
    task: Task
    onMarkAsDone: (id: string) => void  // <--- aqui!

}

export default function TaskItem({ task, onMarkAsDone }: TaskItemProps) {
    console.log(task.completed, task)
    return (
        <li>
            {task.title}
            <button onClick={() => onMarkAsDone(task.id)}>{task.completed ? "feito" : "Marcar Feito"}</button>
        </li>
    )
}