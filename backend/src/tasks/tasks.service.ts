import { Injectable, NotFoundException } from "@nestjs/common";
import { Task } from "./entities/task.entity";
import { CreateTaskDto } from "./dto/create-task.dto";

@Injectable()
export class TasksService {
    private tasks: Task[] = []; // Armazenamento em memória

    findAll(): Task[] {
        return this.tasks;
    }

    create(createTaskDto: CreateTaskDto): Task {
        const task: Task = {
            id: Date.now().toString(),
            title: createTaskDto.title,
            completed: false,
            createdAt: new Date(),
        };
        this.tasks.push(task);
        return task;
    }

    markAsDone(id: string): Task {
        const task = this.tasks.find(t => t.id === id);
        if (!task) {
            throw new NotFoundException('Tarefa não encontrada');
        }
        task.completed = true;
        task.updatedAt = new Date();
        return task;
    }
}