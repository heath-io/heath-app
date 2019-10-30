import electron from 'electron';

const AppTool = {
  serverDomain: 'http://47.103.144.70:5000/',
  serverVideo: 'http://47.103.144.70:5000/video/',
  serverImage: 'http://47.103.144.70:5000/image/',

  // 创建一个新窗口
  createWindow: (uri) => {
    const BrowserWindow = electron.remote.BrowserWindow;
    const playWindow = new BrowserWindow({
      width: 1024,
      height: 728,
      minWidth: 800,
      minHeight: 600,
      backgroundColor: '#eee',
    });

    playWindow.webContents.on('did-finish-load', () => {
      if (!playWindow) {
        throw new Error(`"playWindow" is not defined`);
      }
      if (process.env.START_MINIMIZED) {
        playWindow.minimize();
      } else {
        playWindow.show();
        playWindow.focus();
      }
    });
    // playWindow.loadURL(`${AppTool.serverVideo}${title}`);
    playWindow.loadURL(uri);

    playWindow.on('close', () => {
      console.log('close play window.');
    });
  },
};

export default AppTool;
