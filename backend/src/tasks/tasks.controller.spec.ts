import { Test, type TestingModule } from "@nestjs/testing"
import { NotFoundException } from "@nestjs/common"
import { TasksService } from "./tasks.service"
import { TasksController } from "./tasks.controller"
import { plainToInstance } from "class-transformer"
import { CreateTaskDto } from "./dto/create-task.dto"
import { validateOrReject } from "class-validator"

describe("TasksService", () => {
  let service: TasksService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TasksService],
      controllers: [TasksController],
    }).compile()

    service = module.get<TasksService>(TasksService)
  })

  it("should be defined", () => {
    expect(service).toBeDefined()
  })

  it("should create a task", () => {
    const createTaskDto = { title: "Test task" }
    const task = service.create(createTaskDto)

    expect(task).toBeDefined()
    expect(task.title).toBe("Test task")
    expect(task.completed).toBe(false)
    expect(task.id).toBeDefined()
  })

  it('should throw error when creating task without title', async () => {
    const dto = { title: '' }
    const createTaskDto = plainToInstance(CreateTaskDto, dto)

    await expect(validateOrReject(createTaskDto)).rejects.toBeDefined()
  })

  it('should throw error when body is empty (no title)', async () => {
    const dto = {}
    const createTaskDto = plainToInstance(CreateTaskDto, dto)

    await expect(validateOrReject(createTaskDto)).rejects.toBeDefined()
  })

  it("should return all tasks", () => {
    service.create({ title: "Task 1" })
    service.create({ title: "Task 2" })

    const tasks = service.findAll()
    expect(tasks).toHaveLength(2)
  })

  it("should mark task as done", () => {
    const task = service.create({ title: "Test task" })
    const updatedTask = service.markAsDone(task.id)

    expect(updatedTask.completed).toBe(true)
    expect(updatedTask.updatedAt).toBeDefined()
  })

  it("should throw NotFoundException when marking non-existent task as done", () => {
    expect(() => {
      service.markAsDone("random-id")
    }).toThrow(NotFoundException)
  })
})
