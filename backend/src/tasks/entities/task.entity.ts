export class Task {
    id: string
    title: string
    completed: boolean
    createdAt: Date
    updatedAt?: Date

    constructor(title: string) {
        this.id = Date.now().toString()
        this.title = title
        this.completed = false
        this.createdAt = new Date()
        this.updatedAt = new Date()
    }
}