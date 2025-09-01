import axios from "axios"

const API_URL = "http://localhost:3000/tasks"

export function getTasks() {
    return axios
        .get(API_URL)
        .then(response => response.data)
        .catch(error => {
            console.error("Erro ao buscar tasks:", error)
            throw error
        })
}

export function createTask(title: string) {
    return axios
        .post(API_URL, { title })
        .then(response => response.data)
        .catch(error => {
            console.error("Erro ao criar task:", error)
            throw error
        })
}

export function markTaskAsDone(id: string) {
    return axios
        .patch(`${API_URL}/${id}/done`)
        .then(response => response.data)
        .catch(error => {
            console.error("Erro ao marcar task como feita:", error)
            throw error
        })
}
