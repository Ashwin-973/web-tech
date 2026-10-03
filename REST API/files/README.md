# Full-Stack Task App (React + Express + MongoDB)

Minimal CRUD app: a task list backed by a REST API.

## Run it

**1. Backend**
```
cd server
npm install
cp .env.example .env   # edit MONGO_URI if not running Mongo locally
npm start               # http://localhost:5000
```

**2. Frontend** (in a new terminal)
```
cd client
npm install
npm run dev              # http://localhost:5173
```

Vite's dev server proxies `/api/*` to `http://localhost:5000` (see `client/vite.config.js`),
so the two run on separate ports with no CORS setup needed.

## API

| Method | Route            | Body                | Description        |
|--------|------------------|----------------------|---------------------|
| GET    | /api/tasks       | –                    | list all tasks      |
| POST   | /api/tasks       | `{ text }`           | create a task       |
| PUT    | /api/tasks/:id   | `{ text?, done? }`   | update a task       |
| DELETE | /api/tasks/:id   | –                    | delete a task        |

## Structure
```
server/
  models/Task.js     mongoose schema
  routes/tasks.js    CRUD routes
  server.js          express app + mongo connection
client/
  src/App.jsx        UI + fetch calls
  vite.config.js      dev proxy to backend
```
