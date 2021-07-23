const path = require('path')

module.exports = {
  storagePath: path.resolve(__dirname, 'storage'),
  sources: [
    require('./src/sources/ExampleSource')
  ]
}
