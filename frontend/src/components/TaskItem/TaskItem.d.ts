import type { Task } from "../../types/Task";
interface TaskItemProps {
    task: Task;
    toggleTask: (id: string) => void;
}
export default function TaskItem({ task, toggleTask }: TaskItemProps): import("react/jsx-runtime").JSX.Element;
export {};
