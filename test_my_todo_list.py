import pytest
from fastapi.testclient import TestClient
from main import app

# Create a TestClient instance to interact with the FastAPI app
client = TestClient(app)


def test_get_task():
    # Test retrieving a tasks
    response = client.get(f"/tasks")
    assert response.status_code == 200
