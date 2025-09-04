import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import App from "./App"


const mockAddTask = jest.fn()
jest.mock("./hooks/useTasks", () => ({
    useTasks: () => ({
        tasks: [{ id: 1, title: "Tarefa mockada", completed: false }],
        handleAddTask: mockAddTask,
        handleMarkAsDone: jest.fn(),
        handleSearch: jest.fn(),
        requestTasks: jest.fn(),
        isFiltered: false,
        search: ""
    })
}))

describe("App component", () => {

    it("should render the title and forms", () => {
        render(<App />)
        expect(screen.getByText("To-Do App")).toBeInTheDocument()
        expect(screen.getByPlaceholderText("Digite aqui...")).toBeInTheDocument()
        expect(screen.getByPlaceholderText("Buscar tarefa...")).toBeInTheDocument()
    })

    it("should render the task list", () => {
        render(<App />)
        expect(screen.getByText("Tarefa mockada")).toBeInTheDocument()
    })

    it("must call handleAddTask when creating a new task", async () => {
        const user = userEvent.setup()
        render(<App />)

        const input = screen.getByPlaceholderText("Digite aqui...")
        const button = screen.getByText("Criar")

        await user.type(input, "Nova tarefa")
        await user.click(button)

        expect(mockAddTask).toHaveBeenCalled()
    })

})
