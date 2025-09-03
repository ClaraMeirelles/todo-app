import type { Task } from "../../types/Task"

export interface TaskListProps {
    tasks: Task[]
    toggleTask: (id: string) => void
    search: string
}
