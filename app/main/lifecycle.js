const lifecycle = {
  'winInstant':{},
  'createWindow':(name,areaSize,title)=>{
    if (undefined === lifecycle.winInstant[name]) {
      const { BrowserWindow } = require('electron')
      const { screen: electronScreen } = require('electron')
      const { width, height } = areaSize || electronScreen.getPrimaryDisplay().workAreaSize

      lifecycle.winInstant[name] = new BrowserWindow({ title:title || '电力监控系统', center: true, width: width, height: height,show:false })
      lifecycle.winInstant[name].on('closed',()=>{
        lifecycle.winInstant[name] = undefined
      })
    }

    lifecycle.winInstant[name].loadURL(`file://${__dirname}/../render/${name}.html`)
    lifecycle.winInstant[name].show()
  }
}
module.exports = lifecycle
