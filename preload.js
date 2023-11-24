const { contextBridge, ipcRenderer, remote } = require("electron");

contextBridge.exposeInMainWorld("ipcRenderer", ipcRenderer);
contextBridge.exposeInMainWorld("remote", remote);
