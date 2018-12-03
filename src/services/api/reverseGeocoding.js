import qs from 'qs'

import request from './../../utils/request'

// TODO: move to env
const ENDPOINT = 'https://us1.locationiq.com/v1/reverse.php'
const TOKEN = 'c5ca6dc705fbe9'

export async function get({ latitude, longitude }) {

  const params = qs.stringify({
    key: TOKEN,
    lat: latitude,
    lon: longitude,
    format: 'json'
  })

  return request(`${ENDPOINT}?${params}`)
}
