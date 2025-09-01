import type { Task } from "../../types/Task"

interface TaskItemProps {
    task: Task
}

export default function TaskItem({ task }: TaskItemProps) {
    return (
        <li>
            <span>{task.title}</span>
        </li>
    )
}