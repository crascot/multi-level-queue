const queue = new MultiLevelQueue(2);

const form = document.getElementById('task-form');
const taskNameInput = document.getElementById('task-name');
const taskTimeInput = document.getElementById('task-time');
const taskPrioritySelect = document.getElementById('task-priority');
const startQueueButton = document.getElementById('start-queue');
const logContainer = document.getElementById('log');

function logMessage(message) {
    const messageElement = document.createElement('p');
    messageElement.textContent = message;
    logContainer.appendChild(messageElement);
    logContainer.scrollTop = logContainer.scrollHeight;
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const taskName = taskNameInput.value.trim();
    const taskTime = parseInt(taskTimeInput.value);
    const taskPriority = taskPrioritySelect.value;

    if (!taskName || taskTime <= 0) {
        alert('Введите корректные данные!');
        return;
    }

    queue.addTask({ name: taskName, time: taskTime }, taskPriority);
    logMessage(`Добавлена задача "${taskName}" (Приоритет: ${taskPriority}, Время: ${taskTime}с)`);

    taskNameInput.value = '';
    taskTimeInput.value = '';
    taskPrioritySelect.value = 'high';
});

startQueueButton.addEventListener('click', () => {
    queue.run(logMessage);
});
