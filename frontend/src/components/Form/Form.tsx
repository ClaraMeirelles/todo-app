import React, { useState } from "react"

interface FormProps {
    onAddTask: (title: string) => void
}

export function Form({ onAddTask }: FormProps) {
    const [title, setTitle] = useState("")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (!title.trim()) return
        onAddTask(title)
        setTitle("")
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={title}
                onChange={e => setTitle(e.target.value)}
                placeholder="Nova tarefa"
            />
            <button type="submit">Adicionar</button>
        </form>
    )
}
