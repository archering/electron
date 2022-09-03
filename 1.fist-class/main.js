const {app, BrowserWindow} = require('electron'); 

let mainWindow;
const createWindow = ()=>{
    mainWindow = new BrowserWindow({
        width:800,
        height: 600
    });

    mainWindow.loadFile('./index.html');
}

app.whenReady().then(()=>{
    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    });    
});

  //在Windows和Linux上，关闭所有窗口 完全退出一个应用程序
  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();// macOS 使用 quit 命令退出应用程序
  });