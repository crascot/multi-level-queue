const { app, BrowserWindow, Menu } = require('electron');

let mainWindow;

app.on('ready', () => {
    Menu.setApplicationMenu(null);

    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });

    mainWindow.loadFile('dist/index.html');
});
