// 创建应用实例，管理生命周期
const { app } = require('electron')
const { createWindow } = require('./lifecycle')




app.on('ready',createWindow)
app.on('activate',createWindow)
app.on('window-all-closed',()=>{
  if (process.platform === 'darwin') {
    app.quit()
  }
})
// 加载首页
