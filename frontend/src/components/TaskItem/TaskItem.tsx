import type { Task } from "../../types/Task"

interface TaskItemProps {
    task: Task
}

export default function TaskItem({ task, onMarkAsDone }: TaskItemProps) {
    return (
        <li>
            {task.title}
            <button onClick={() => onMarkAsDone(task.id)}>Feito</button>
        </li>
    )
}