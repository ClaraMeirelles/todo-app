import { Body, Controller, Get, Param, Patch, Post, Request } from "@nestjs/common"
import { TasksService } from "./tasks.service"
import { Task } from "./entities/task.entity"
import { CreateTaskDto } from "./dto/create-task.dto"

@Controller("tasks")
export class TasksController {
    constructor(private readonly tasksService: TasksService) { }
    @Get()
    findAll(): Task[] {
        return this.tasksService.findAll()
    }

    @Post()
    create(@Body() createTaskDto: CreateTaskDto): Task {
        return this.tasksService.create(createTaskDto)
    }

    @Patch(':id/done')
    markAsDone(@Request() req): Task {
        const id = req.params.id;
        return this.tasksService.markAsDone(id);
    }

}