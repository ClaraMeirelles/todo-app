import TaskItem from "../TaskItem/TaskItem"
import type { TaskListProps } from "./TaskList.types"

export default function TaskList({ tasks, onMarkAsDone }: TaskListProps) {

    return (
        <ul>
            {tasks.map(task => (
                <TaskItem key={task.id} task={task} onMarkAsDone={onMarkAsDone} />
            ))}

        </ul>
    )
}