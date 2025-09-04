import { render, screen } from "@testing-library/react"
import App from "./App"


jest.mock("./hooks/useTasks", () => ({
    useTasks: () => ({
        tasks: [
            { id: 1, title: "Tarefa mockada", completed: false }
        ],
        addTask: jest.fn(),
        toggleTask: jest.fn(),
        searchTask: jest.fn()
    })
}))

describe("App component", () => {
    it("deve renderizar o título e os formulários", () => {

        render(<App />)

        expect(screen.getByText("To-Do App")).toBeInTheDocument()
        expect(screen.getByPlaceholderText("Digite aqui...")).toBeInTheDocument()
        expect(screen.getByPlaceholderText("Buscar tarefa...")).toBeInTheDocument()
    })
})
