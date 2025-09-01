export interface TaskListProps {
    tasks: Task[]
    onMarkAsDone?: (id: string) => void
}
