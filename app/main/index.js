
const { app,ipcMain } = require('electron')
const { createWindow } = require('./lifecycle')
// 创建应用实例，管理生命周期
app.on('ready',() => {
  // 加载首页
  createWindow('main')
  // 监听render process的通信
  ipcMain.on('open-window',(evt,args)=>{
    let { moduleName,width,height,title } = args
    createWindow(moduleName,{width:width,height:height },title)
  })
})
app.on('activate',() => { createWindow('main') })
app.on('window-all-closed',()=>{
  if (process.platform === 'darwin') {
    app.quit()
  }
})
