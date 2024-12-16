class MultiLevelQueue {
    constructor(timeSlice) {
        this.highPriorityQueue = []; // Очередь Round Robin
        this.lowPriorityQueue = []; // Очередь FCFS
        this.timeSlice = timeSlice; // Квант времени для Round Robin
    }

    // Добавить задачу в очередь
    addTask(task, priority = "low") {
        if (priority === "high") {
            this.highPriorityQueue.push(task);
        } else {
            this.lowPriorityQueue.push(task);
        }
    }

    // Функция для паузы (задержка)
    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    // Выполнить задачи
    async run(logCallback) {
        logCallback("Запуск обработки задач...");
        while (this.highPriorityQueue.length > 0 || this.lowPriorityQueue.length > 0) {
            // Сначала обрабатываем задачи из очереди Round Robin
            while (this.highPriorityQueue.length > 0) {
                const task = this.highPriorityQueue.shift();
                logCallback(`Выполняется задача из High Priority: ${task.name}`);
                await this.sleep(1000); // Задержка 1 секунда для визуализации выполнения задачи

                task.time -= this.timeSlice;
                if (task.time > 0) {
                    logCallback(`Задача "${task.name}" не завершена, возвращаем в очередь.`);
                    this.highPriorityQueue.push(task);
                } else {
                    logCallback(`Задача "${task.name}" завершена.`);
                }
                await this.sleep(1000); // Задержка перед переходом к следующей задаче
            }

            // Затем обрабатываем задачи из очереди FCFS
            if (this.highPriorityQueue.length === 0 && this.lowPriorityQueue.length > 0) {
                const task = this.lowPriorityQueue.shift();
                logCallback(`Выполняется задача из Low Priority: ${task.name}`);
                await this.sleep(2000); // Задержка 2 секунды для имитации долгого выполнения
                logCallback(`Задача "${task.name}" завершена.`);
                await this.sleep(1000); // Задержка перед переходом к следующей задаче
            }
        }

        logCallback("Все задачи завершены!");
    }
}
