const { BrowserWindow,Menu } = require('electron')
const menus = require('./menus')

const lifecycle = {
  'winInstant':null,
  'createWindow':()=>{
    if (null === lifecycle.winInstant) {
      const { screen: electronScreen } = require('electron')
      const { width, height } = electronScreen.getPrimaryDisplay().workAreaSize
      lifecycle.winInstant = new BrowserWindow({ center: true, width: width, height: height,show:false })
      Menu.setApplicationMenu(Menu.buildFromTemplate(menus))
    }

    lifecycle.winInstant.loadURL(`file://${__dirname}/../render/main.html`)
    lifecycle.winInstant.show()
  }
}
module.exports = lifecycle
