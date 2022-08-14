const { BrowserWindow } = require('electron');
const defaultOptions =  require('../config/window.config');

class WindowFactory {
    constructor(name) {
        this.name = name||'main';
    }
    createWindow(options={}) {
        let win = new BrowserWindow(Object.assign({},defaultOptions,options) );
        new Proxy(win,{
            load(url) {
                switch(url) {
                    case url.startsWith('http'):
                        return win.loadURL(url);
                    case url.startsWith('file'):
                        return win.loadFile(url);
                    default:
                        return win.loadURL(url);
                }
            }
             
        });
        return win;
    }
}

module.exports = WindowFactory;