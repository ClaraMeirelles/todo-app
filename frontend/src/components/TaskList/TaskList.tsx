import TaskItem from "../TaskItem/TaskItem"
import type { TaskListProps } from "./TaskList.types"

export default function TaskList({ tasks, toggleTask }: TaskListProps) {

    return (
        <ul>
            {tasks.sort((a, b) => {
                if (a.completed === b.completed) return 0
                return a.completed ? 1 : -1
            }).map(task => (
                <TaskItem key={task.id} task={task} toggleTask={toggleTask} />
            ))}

        </ul>
    )
}