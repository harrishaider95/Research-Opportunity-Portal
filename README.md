# University Research Opportunity Portal

A full-stack application for students to browse research opportunities and for faculty to create, update, close, and delete listings. The frontend uses React and Vite, the backend uses Express, and opportunity records are stored in MongoDB.

## Requirements

- Node.js 20 or newer
- npm
- A MongoDB database, either local or hosted (for example, MongoDB Atlas)

## Setup

### 1. Configure the backend

Open PowerShell in the repository root:

```powershell
cd .\backend
npm install
```

Create a `backend/.env` file and set the MongoDB connection details:

```env
MONGODB_URI=mongodb://127.0.0.1:27017
MONGODB_DATABASE=research_opportunity_portal
PORT=4000
CORS_ORIGIN=http://localhost:5173
```

For MongoDB Atlas, replace `MONGODB_URI` with your Atlas connection string. Do not commit `.env` or share its credentials. The API creates/uses the `research_opportunities` collection.

### 2. Configure the frontend

Open a second PowerShell terminal in the repository root:

```powershell
cd .\frontend
npm install
Copy-Item .env.example .env
```

The example sets `VITE_API_URL` to `http://localhost:4000/api`. Change it in `frontend/.env` if the backend is hosted at a different URL.

## Run the application

Start the backend in the first terminal:

```powershell
cd .\backend
npm run dev
```

Start the frontend in the second terminal:

```powershell
cd .\frontend
npm run dev
```

Open the Vite URL printed in the frontend terminal (normally `http://localhost:5173`). The backend normally listens at `http://localhost:4000`; verify it at `http://localhost:4000/api/health`.

The frontend uses clean paths without URL fragments:

- `/home` — home page
- `/browse` — browse opportunities
- `/add` — add an opportunity
- `/opportunity/:id` — view an opportunity's details

## API

All API endpoints are under `/api`.

| Method | Path | Description |
| --- | --- | --- |
| `GET` | `/api/health` | Check that the API is running |
| `GET` | `/api/opportunities` | List opportunities |
| `GET` | `/api/opportunities/:id` | Retrieve one opportunity |
| `POST` | `/api/opportunities` | Create an opportunity |
| `PUT` | `/api/opportunities/:id` | Update an opportunity |
| `PATCH` | `/api/opportunities/:id` | Partially update supplied fields |
| `DELETE` | `/api/opportunities/:id` | Delete an opportunity |

When substituting an ID in a URL, omit the colon. For example:

```text
http://localhost:4000/api/opportunities/6aca3f3cf1da597da7d37a64
```

Errors return a JSON response with a `statusCode` matching the HTTP status. Unknown API routes return `404` with `Page not found`.

## Checks and tests

Run backend tests:

```powershell
cd .\backend
npm test
```

Lint and build the frontend:

```powershell
cd .\frontend
npm run lint
npm run build
```

## Postman

Import [the Postman collection](./postman/Research-Opportunity-Portal.postman_collection.json) into Postman to try the API endpoints. Set its `baseUrl` variable to `http://localhost:4000`, then run the requests in order as described in the collection.
