<h1>MultiLevelQueue - Многоуровневая очередь</h1>
<p>Это кроссплатформенное приложение, написанное на JavaScript с использованием фреймворка <strong>Electron</strong> для
    сборки десктопных приложений. Приложение поддерживает Windows, macOS и Linux.</p>

<h2>Описание</h2>
<p>Приложение реализует метод многоуровневой очереди, где предусмотрены два типа очередей:</p>
<ul>
    <li><strong>Высшая очередь (Round Robin)</strong></li>
    <li><strong>Низшая очередь (FCFS)</strong></li>
</ul>
<p>Пользователь может указать название очереди, её время выполнения и тип (высшая или низшая) в поле ввода. После
    заполнения очереди можно начать процесс обработки.</p>
<p>Если задача с высшей очередью не успевает выполнить свою работу в пределах заданного времени (квант времени), она
    переносится в конец очереди, и начинается выполнение следующей задачи. После завершения всех задач высшего
    приоритета, начинается выполнение задач низшего приоритета.</p>

<h2>Инструкция по использованию</h2>
<ol>
    <li>Установите все зависимости, используя команду: <code>npm install</code></li>
    <li>Запустите проект с помощью команды: <code>npm start</code></li>
    <li>Для создания сборки для выбранной ОС используйте одну из следующих команд:
        <ul>
            <li><code>npm run build:win</code> — создаёт установочный файл для Windows</li>
            <li><code>npm run build:mac</code> — создаёт установочный файл для macOS</li>
            <li><code>npm run build:linux</code> — создаёт установочный файл для Linux</li>
        </ul>
    </li>
    <li>После сборки в корне проекта появится директория <code>build</code>, в которой будет находиться установочный
        файл для выбранной платформы.</li>
    <li>Для настройки сборки использован файл конфигурации <code>.yml</code>.</li>
</ol>

<h2>Технологии</h2>
<p>Приложение написано с использованием следующих технологий:</p>
<ul>
    <li><strong>JavaScript</strong></li>
    <li><strong>Electron</strong> — для кроссплатформенной сборки приложения</li>
    <li><strong>Node.js</strong> — для работы с зависимостями и скриптами</li>
</ul>
