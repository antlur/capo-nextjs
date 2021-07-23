const { DataSource } = require('capo-data-sourcer')
const axios = require('axios')

class LocationSource extends DataSource {
  storageKey = 'locations'
  
  async fetch() {
    const { data } = await axios.get('https://bernie.docbs.com/api/locations')
    return data
  }

  async transform(data) {
    return data.map(location => location.slug)
  }
}

module.exports = LocationSource
