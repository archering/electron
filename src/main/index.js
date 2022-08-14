const { app,BrowserWindow } = require('electron');
const path = require('path');
const WindowFactory = require('./component/window.factory');
const windowRefMap = new Map();

// 这段程序将会在 Electron 结束初始化
// 和创建浏览器窗口的时候调用
// 部分 API 在 ready 事件触发后才能使用。
app.whenReady().then(() => {
    let win = new WindowFactory().createWindow();
    windowRefMap.set(win.name,win);

    app.on('activate', () => {
      // On macOS it's common to re-create a window in the app when the
      // dock icon is clicked and there are no other windows open.
      if (BrowserWindow.getAllWindows().length === 0){
            win = WindowFactory().createWindow();
            windowRefMap.set(win.name,win);
      }
    });
  })
  
  // 除了 macOS 外，当所有窗口都被关闭的时候退出程序。 There, it's common
  // for applications and their menu bar to stay active until the user quits
  // explicitly with Cmd + Q.
  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
    windowRefMap.clear();
  });