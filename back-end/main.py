from fastapi import FastAPI
from routes import router
from database import init_db
import uvicorn
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    "http://localhost",
    "http://127.0.0.1:5500"  # Add any other origins if necessary
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

init_db()

app.include_router(router)

if __name__ == '__main__':
    uvicorn.run("main:app", reload=True, host="0.0.0.0", port=8181)
