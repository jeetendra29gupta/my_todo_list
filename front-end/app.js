const url = "http://localhost:8181";

function init() {
    fetch(`${url}/tasks`, {
        headers: {
            'accept': 'application/json',
            'Content-Type': 'application/json'
        },
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const task_list = document.getElementById('task_list');
            let object = "";
            data.forEach(task => {
                const isChecked = task.completed ? 'checked' : '';
                object += `
                <li title="${task.description}" class="${isChecked}">
                    <span>${task.title}</span>
                    <b class="close" onclick="update_todo(${task.id})">X</b>
                </li>
            `;
            });
            task_list.innerHTML = object;
        })
        .catch(error => {
            console.error('Error:', error);
        });
}


function save_todo() {
    const title_value = document.getElementById("title").value.trim();
    const description_value = document.getElementById("description").value.trim();
    const deadline_value = document.getElementById("deadline").value.trim();

    if (!title_value || !description_value || !deadline_value) {
        alert("Title, Description, and Deadline cannot be empty");
        return;
    }

    const request_body = {
        "title": title_value,
        "description": description_value,
        "completed": false,
        "deadline": deadline_value
    };

    fetch(`${url}/tasks`, {
        method: 'POST',
        headers: {
            'accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(request_body),
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            window.location.href = 'index.html';
        })
        .catch(error => {
            console.error('Error:', error);
        });
}


function update_todo(task_id) {
    fetch(`${url}/tasks/${task_id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            window.location.href = 'index.html';
        })
        .catch(error => {
            console.error('Error updating task:', error);
        });
}
