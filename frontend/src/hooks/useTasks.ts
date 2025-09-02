import { useEffect, useState } from 'react'
import { createTask, getTasks, markTaskAsDone } from '../components/api/apiConfig'
import type { Task } from '../types/Task'
import toast from 'react-hot-toast'

export function useTasks() {
    const [tasks, setTasks] = useState<Task[]>([])
    const [loading, setLoading] = useState(true)
    const [isFiltered, setIsFfiltered] = useState(false)
    useEffect(() => {
        requestTasks()
    }, [])

    const requestTasks = () => {
        getTasks().then(data => {
            setTasks(data)
            setLoading(false)
        })
        setIsFfiltered(false)
    }
    const handleAddTask = async (title: string) => {
        if (!title.trim()) return
        const newTask = await createTask(title)
        setTasks(prev => [...prev, newTask])
    }

    const handleMarkAsDone = async (id: string) => {
        const updated = await markTaskAsDone(id)
        setTasks(prev => prev.map(t => (t.id === id ? updated : t)))
    }

    const handleSearch = (query: string) => {
        const filteredTasks =
            tasks.filter(task =>
                task.title.toLowerCase().includes(query.toLowerCase())
            )
        if (filteredTasks.length) {
            setTasks(filteredTasks)
            setIsFfiltered(true)
        } else {
            toast.error("Tarefa não encontrada")
        }
    }

    return { tasks, loading, handleAddTask, handleMarkAsDone, handleSearch, requestTasks, isFiltered }
}
