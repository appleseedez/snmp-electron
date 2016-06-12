
const { app,ipcMain } = require('electron')
const { createWindow, destroyWindow} = require('./lifecycle')
// 创建应用实例，管理生命周期
app.on('ready',() => {
  // 加载首页
  createWindow('login',{width:500,height:320})

  const punt = require('punt')
  let discoverReq = punt.connect('192.168.1.110:6002')
  discoverReq.sock.on('message',(msg)=>{
    console.log('::::: %s',msg)
  })
  let buf = Buffer.from('VIEW','ascii')
  discoverReq.sock.send(buf, 0, buf.length, discoverReq.addr.port, discoverReq.addr.hostname)


  // 监听render process的通信
  ipcMain.on('open-window',(evt,args)=>{
    let { moduleName,width,height,title } = args
    createWindow(moduleName,{width:width,height:height },title,true)
  })
  ipcMain.on('login',(evt,args)=>{
    // do login request
    // close login window
    createWindow('main')
    destroyWindow('login')
  })
})
app.on('activate',() => {
  if (true) {
    createWindow('main')


  }else {
    createWindow('login',{width:500,height:320},'登录',true)
  }
})
app.on('window-all-closed',()=>{
  if (process.platform === 'darwin') {
    app.quit()
  }
})
