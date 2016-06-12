const { Menu } = require('electron').remote
const menuTpl = require('./device-menu')


Menu.setApplicationMenu(Menu.buildFromTemplate(menuTpl))
