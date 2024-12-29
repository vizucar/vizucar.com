import { app, BrowserWindow, ipcMain } from "electron";
import path from "path";
import { getPreloadPath } from "./pathResolver.js";
import { getStaticData, pollRessources } from "./resourceManager.js";
import { ipcMainOn, isDev } from "./util.js";

app.on("ready", () => {
  const mainWindow = new BrowserWindow({
    width: 500,
    height: 500,
    resizable: false,
    frame: false,
    webPreferences: {
      preload: getPreloadPath(),
    },
  });

  if (isDev()) {
    mainWindow.loadURL("http://localhost:5123");
  } else {
    mainWindow.loadFile(path.join(app.getAppPath(), "/dist-react/index.html"));
  }

  ipcMainOn("sendFrameAction", (payload) => {
    switch (payload) {
      case "CLOSE":
        mainWindow.close();
        break;
      case "MAXIMIZE":
        mainWindow.maximize();
        break;
      case "MINIMIZE":
        mainWindow.minimize();
        break;
    }
  });

  pollRessources(mainWindow);

  ipcMain.handle("getStaticData", () => {
    return getStaticData();
  });
});
