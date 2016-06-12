const { ipcRenderer } = require('electron')

const loginBtn = document.getElementById('J_Login')
loginBtn.addEventListener('click',(evt)=>{
  ipcRenderer.send('login')
})
