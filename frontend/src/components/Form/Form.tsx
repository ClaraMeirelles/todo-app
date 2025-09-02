import React, { useState } from "react"

interface InputFormProps {
    onSubmit: (value: string) => void
    placeholder?: string
    buttonLabel?: string
    initialValue?: string
}

export function Form({
    onSubmit,
    placeholder = "Digite aqui...",
    buttonLabel = "Enviar",
    initialValue = ""
}: InputFormProps) {
    const [value, setValue] = useState(initialValue)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (!value.trim()) return
        onSubmit(value)
        setValue("")
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={value}
                onChange={e => setValue(e.target.value)}
                placeholder={placeholder}
            />
            {buttonLabel && <button type="submit">{buttonLabel}</button>}
        </form>
    )
}
