const electron = require('electron')
const { app } = electron
const { BrowserWindow } = electron


const snmp = require('snmp-native')

let win
const createWindow = ()=>{
  win = new BrowserWindow({
    width:800,
    height:600
  })
  win.loadURL(`file://${__dirname}/main.html`)
  win.webContents.openDevTools({mode:'bottom'})

  let session = new snmp.Session({host:'192.168.1.110',port:161,community:'PUBLIC'})
  session.get({ oid: '.1.3.6.1.4.1.40172.1.10.2.0' }, function (error, varbinds) {
    if (error) {
        console.log('Fail :(');
    } else {
        console.log(varbinds[0].oid + ' = ' + varbinds[0].value + ' (' + varbinds[0].type + ')');
    }
});


session.set({ oid: '.1.3.6.1.4.1.40172.1.10.10.1.5.2', value: 0, type: 2 }, function (error, varbind) {
    if (error) {
        console.log('Fail :(');
    } else {
        console.log('The set is done.');
    }
});

  // events
  win.on('closed',()=>{
    win = null
  })

}

app.on('ready',createWindow)
app.on('window-all-closed',()=>{
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
app.on('activate',()=>{
  if (win === null) {
    createWindow()
  }
})
