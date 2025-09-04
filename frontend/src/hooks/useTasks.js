import { useEffect, useState } from 'react';
import { createTask, getTasks, markTaskAsDone } from '../components/api/apiConfig';
import toast from 'react-hot-toast';
export function useTasks() {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isFiltered, setIsFfiltered] = useState(false);
    const [search, setSearch] = useState("");
    useEffect(() => {
        requestTasks();
    }, []);
    const requestTasks = () => {
        getTasks().then(data => {
            setTasks(data);
            setLoading(false);
        });
        setIsFfiltered(false);
    };
    const handleAddTask = async (title) => {
        if (!title.trim())
            return;
        const newTask = await createTask(title);
        setTasks(prev => [...prev, newTask]);
    };
    const toggleTask = async (id) => {
        const updated = await markTaskAsDone(id);
        setTasks(prev => prev.map(t => (t.id === id ? updated : t)));
    };
    const handleSearch = (query) => {
        const filteredTasks = tasks.filter(task => task.title.toLowerCase().includes(query.toLowerCase()));
        if (filteredTasks.length) {
            setSearch(query);
            setIsFfiltered(true);
        }
        else {
            toast.error("Tarefa não encontrada");
            setSearch("");
        }
    };
    return { tasks, loading, handleAddTask, toggleTask, handleSearch, requestTasks, isFiltered, search };
}
