const snmp = require('snmp-native')

const session = new snmp.Session({
    host: '192.168.1.110',
    port: 161,
    community: 'PUBLIC'
})

const snmpAPI = {
  'getOidNEVendor' : function(cb) {
    session.get({
        oid: '.1.3.6.1.4.1.40172.1.3.1.2.0'
    },cb)
  },
  'setOidACOutputSw3Enable':function(cb){
        session.set({
            oid: '.1.3.6.1.4.1.40172.1.10.10.1.5.2',
            value: 0,
            type: 2
        }, cb)
  }
}

module.exports = snmpAPI
