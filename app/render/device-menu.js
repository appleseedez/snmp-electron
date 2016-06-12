const { ipcRenderer } = require('electron')
const menus = [
  { label:'关于软件' },
  {
    label:'系统配置',
    submenu:[
      {
        label:'网络配置',
        click: function (item, focusedWindow) {
          if (focusedWindow) {
            ipcRenderer.send('open-window',{
              moduleName:'network-setting',
              height:400,
              width:500,
              title:'网络配置'
            })
          }
        }
      },
      {
        label:'SNTP配置',
        click:function(item, focusedWindow){
          if (focusedWindow) {
            ipcRenderer.send('open-window',{
              moduleName:'device',
              height:620,
              width:990,
              title:'电源管理'
            })
          }
        }
       },
      { label:'SNMP配置' },
      { label:'系统信息' },
      { label:'退出' }
    ]
  },
  {
    label:'单元配置',
    submenu:[
      { label:'设备查询' },
      { label:'在线统计' },
    ]
  },
  {
    label:'告警阈值配置',
    submenu:[
      { label:'当前告警管理' },
      { label:'历史告警管理' },
      { label:'告警类型管理' },
      { label:'告警屏蔽规则' },
    ]
  },
  {
    label:'设备控制',
    submenu:[
      { label:'操作日志' },
      { label:'安全日志' },

    ]
  },
  {
    label:'设备维护',
    submenu:[
      { label:'操作日志' },
      { label:'安全日志' },

    ]
  }
]
module.exports = menus
