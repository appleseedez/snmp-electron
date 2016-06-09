const menus = [
  { label:'关于软件' },
  {
    label:'系统管理',
    submenu:[
      { label:'用户管理' },
      { label:'权限组管理' },
      { label:'安全管理' },
      { label:'系统配置' },
      { label:'修改密码' },
      { label:'退出' }
    ]
  },
  {
    label:'设备管理',
    submenu:[
      { label:'设备查询' },
      { label:'在线统计' },
    ]
  },
  {
    label:'告警管理',
    submenu:[
      { label:'当前告警管理' },
      { label:'历史告警管理' },
      { label:'告警类型管理' },
      { label:'告警屏蔽规则' },
    ]
  },
  {
    label:'日志管理',
    submenu:[
      { label:'操作日志' },
      { label:'安全日志' },

    ]
  }
]
module.exports = menus
