import { app, BrowserWindow } from "electron";
import path from "path";
import { getPreloadPath } from "./pathResolver.js";
import { ipcMainOn, isDev } from "./util.js";

app.on("ready", () => {
  const mainWindow = new BrowserWindow({
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
});
