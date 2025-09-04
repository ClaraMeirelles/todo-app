import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function TaskItem({ task, toggleTask }) {
    return (_jsxs("li", { className: `task-item ${task.completed ? "done" : ""}`, children: [task.title, _jsx("input", { type: "checkbox", checked: task.completed, onChange: () => toggleTask(task.id) })] }));
}
