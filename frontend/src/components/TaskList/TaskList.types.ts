import type { Task } from "../../types/Task"

export interface TaskListProps {
    tasks: Task[]
    onMarkAsDone?: (id: string) => void
}
