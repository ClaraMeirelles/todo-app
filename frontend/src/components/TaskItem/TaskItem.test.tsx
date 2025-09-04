import { render } from "@testing-library/react"
import TaskItem from "./TaskItem"
describe("Task Item test", () => {
    it("Test render", () => {
        render(<TaskItem />)
    })
})

