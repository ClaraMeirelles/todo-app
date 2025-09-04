# 🧠 ToDoList App

Aplicação fullstack para gerenciamento de tarefas, construída com React + NestJS + Docker.

## 🚀 Tecnologias

* **Frontend**: React 19 + Vite 7 + TypeScript  
* **Backend**: NestJS + TypeScript  
* **Estilo**: CSS puro  
* **Testes**: Jest + React Testing Library  
* **Empacotamento**: Docker + Docker Compose  

## 📦 Como rodar localmente

### 🔧 Backend

```bash
cd backend
npm install
npm run start:dev
```

### 🔧 Frontend

```bash
cd frontend
npm install
npm run dev
```

Acesse: http://localhost:5173

## 🐳 Como rodar com Docker

### 🔧 Build e execução com Docker Compose

```bash
sudo docker-compose up --build
```

Acesse:

* Frontend: http://localhost:5173  
* Backend: http://localhost:3000/tasks  

## 📡 API

A documentação completa da API está disponível no [Postman](https://documenter.getpostman.com/view/15936875/2sB3HkpKrA)

O backend expõe uma API RESTful para gerenciamento de tarefas, com os seguintes endpoints principais:

- `GET /tasks` → lista todas as tarefas  
- `POST /tasks` → cria nova tarefa  
- `PATCH /tasks/:id/done` → alterna status concluída/não concluída  


## 🧪 Testes

### Frontend

```bash
npm test
```

### Backend

```bash
npm run test
```

## 📁 Estrutura do projeto

```
todo-app/
├── frontend/
│   ├── src/
│   ├── Dockerfile
│   └── tsconfig.build.json
├── backend/
│   ├── src/
│   ├── Dockerfile
├── docker-compose.yml
└── README.md
```

## 📌 Observações

* O frontend é servido via Nginx após build com Vite.  
* O backend roda em Node 22 com NestJS em modo produção.  
* O projeto está empacotado para rodar em qualquer ambiente com Docker instalado.  
