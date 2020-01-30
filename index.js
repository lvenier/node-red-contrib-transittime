module.exports = function (RED) {
  var result = {
    errorCode: 0,
    errorMsg: '',
    transitTime: ''
  }

  function TransitTimeError (node, code, msg) {
    result.errorCode = code
    result.errorMsg = msg
    node.status({
      fill: 'red',
      shape: 'ring',
      text: msg
    })
    node.error(msg)
  }

  function TransitTimeNode (config) {
    RED.nodes.createNode(this, config)
    var node = this
    node.on('input', function (msg) {
      if (msg.payload.config) {
        var config = msg.payload.config
        if (config.speed > 0 && config.drivingTime > 0 && config.maxDrivingTime > 0) {
          config.speed = config.speed * 60 // we have speed in km per minute in config. to be improved.
          const nbHour = Math.floor(msg.payload.distance / config.speed)
          const nbPeriod = Math.floor(nbHour / config.drivingTime)
          const nbRestTime = Math.floor(nbHour / config.maxDrivingTime)
          result.transitTime = (config.drivingTime * nbPeriod) + config.breakTime * nbPeriod + (config.restTime - config.breakTime) * nbRestTime + (msg.payload.distance - config.drivingTime * nbPeriod * config.speed) / config.speed
        } else TransitTimeError(node, 2, 'speed, drivingTime, maxDrivingTime should be more 0')
      } else TransitTimeError(node, 1, 'unknown vehicule type')
      msg.payload = result
      node.status({
        fill: 'green',
        shape: 'ring',
        text: result.transitTime
      })
      node.send(msg)
    })
  }
  RED.nodes.registerType('transitTime', TransitTimeNode)
}
