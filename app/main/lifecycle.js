const lifecycle = {
  'winInstant':{},
  'createWindow':(name,areaSize,title,frameless)=>{
    // 建立窗口实例索引表
    if (undefined === lifecycle.winInstant[name]) {
      const { BrowserWindow } = require('electron')
      const { screen: electronScreen } = require('electron')
      const { width, height } = areaSize || electronScreen.getPrimaryDisplay().workAreaSize

      lifecycle.winInstant[name] = new BrowserWindow({ title:title || '电力监控系统', center: true, width: width, height: height,show:false,frame:!!frameless })
      lifecycle.winInstant[name].on('closed',()=>{
        lifecycle.winInstant[name] = undefined
      })
      lifecycle.winInstant[name].on('focus',()=>{
        lifecycle.winInstant[name].reload()
      })
      lifecycle.winInstant[name].loadURL(`file://${__dirname}/../render/${name}.html`)



      
    }


    lifecycle.winInstant[name].show()
  },
  'destroyWindow':(name)=>{
    lifecycle.winInstant[name].destroy && lifecycle.winInstant[name].destroy()
  }
}
module.exports = lifecycle
