const { Menu } = require('electron').remote
const menuTpl = require('./main-menu')


Menu.setApplicationMenu(Menu.buildFromTemplate(menuTpl))
