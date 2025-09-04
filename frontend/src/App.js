import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Form } from "./components/Form/Form";
import TaskList from "./components/TaskList/TaskList";
import { useTasks } from "./hooks/useTasks";
import './App.css';
import { Toaster } from "react-hot-toast";
function App() {
    const { tasks, handleAddTask, toggleTask, handleSearch, isFiltered, search } = useTasks();
    return (_jsxs("main", { children: [_jsx("h1", { children: "To-Do App" }), _jsx(Form, { onSubmit: handleAddTask, placeholder: "Digite aqui...", buttonLabel: "Criar", initialValue: "" }), _jsxs("section", { children: [_jsx(Form, { onSubmit: handleSearch, placeholder: "Buscar tarefa...", buttonLabel: "Buscar" }), isFiltered && _jsx("button", { onClick: () => handleSearch(""), children: "Ver todas as tarefas" }), _jsx(TaskList, { tasks: tasks, toggleTask: toggleTask, search: search })] }), _jsx(Toaster, { position: "top-center" })] }));
}
export default App;
