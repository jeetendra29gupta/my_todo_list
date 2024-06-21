# FastAPI Todo List API

This project implements a Todo List API using FastAPI, allowing you to manage tasks through a RESTful interface.

## Features

- CRUD operations for managing tasks (Create, Read, Update, Delete)
- RESTful API handling of requests

## Technologies Used

- Python
- FastAPI
- SQLAlchemy (for database integration)
- Docker (for containerization)
- Pytest (for testing)

## Installation

1. Clone the repo
   ```sh
   git clone https://github.com/your_username/your_project.git
   cd your_project
	```

2. Set up virtual environment (optional but recommended)
	```sh
	python -m venv venv
	source venv/bin/activate  # On Windows use `venv\Scripts\activate`
	```

3. Install dependencies
	```sh
	pip install -r requirements.txt
	```

4. Running the API
	```sh
	uvicorn main:app --reload --host 0.0.0.0 --port 8181
	```

5. Access the Swagger documentation
	```sh
	http://localhost:8181/docs
	```
