import axios from "axios"

const API_URL = "http://localhost:3000/tasks"

export async function getTasks() {
    const response = await axios.get(`${API_URL}`)
    return response.data
}

export async function createTask(title: string) {
    const response = await axios.post(API_URL, { title })
    return response.data
}

export async function markTaskAsDone(id: string) {
    const response = await axios.patch(`${API_URL}/${id}/done`)
    return response.data
}