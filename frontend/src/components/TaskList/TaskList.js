import { jsx as _jsx } from "react/jsx-runtime";
import TaskItem from "../TaskItem/TaskItem";
export default function TaskList({ tasks, toggleTask, search }) {
    return (_jsx("ul", { children: tasks.filter(task => task.title.toLowerCase().includes(search.toLowerCase())).sort((a, b) => {
            if (a.completed === b.completed)
                return 0;
            return a.completed ? 1 : -1;
        }).map(task => (_jsx(TaskItem, { task: task, toggleTask: toggleTask }, task.id))) }));
}
