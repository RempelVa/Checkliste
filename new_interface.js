document.addEventListener('DOMContentLoaded', loadTasks);
document.getElementById('taskForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const taskText = document.getElementById('newTask').value;
    if (taskText.trim() !== '') {
        addTask(taskText);
        document.getElementById('newTask').value = '';
        saveTasks();
    }
});

function addTask(taskText, isCompleted = false) {
    const taskList = document.getElementById('taskList');

    const li = document.createElement('li');
    li.textContent = taskText;

    if (isCompleted) {
        li.classList.add('completed');
    }

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Entfernen';
    removeButton.className = 'remove';
    removeButton.addEventListener('click', function() {
        taskList.removeChild(li);
        saveTasks();
    });

    li.appendChild(removeButton);
    taskList.appendChild(li);

    li.addEventListener('click', function() {
        li.classList.toggle('completed');
        saveTasks();
    });
}

function saveTasks() {
    const tasks = [];
    document.querySelectorAll('#taskList li').forEach(li => {
        tasks.push({ text: li.textContent.replace('Entfernen', '').trim(), completed: li.classList.contains('completed') });
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    if (tasks) {
        tasks.forEach(task => addTask(task.text, task.completed));
    }
}
