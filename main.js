const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");

const createWindow = () => {
  const win = new BrowserWindow({
    width: 500,
    height: 800,
    frame: true,
    titleBarStyle: "hidden",
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });
  win.loadFile("./main.html");
};

app
  .whenReady()
  .then(() => {
    createWindow();

    // For Mac Open
    app.on("activate", () => {
      if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
  })
  .catch((error) => {
    console.error(error);
  });

// Shut Down Program When Window is closed
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

ipcMain.on("quit-app", () => {
  app.quit();
});

ipcMain.on("min-app", () => {
  app.setSkipTaskbar(true);
});
