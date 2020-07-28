import qs from 'qs'

const WEATHER_API_ENDPOINT = 'https://api.climacell.co/v3/weather/realtime'
const HEADERS = {
  'content-type': 'application/json',
  'accept': 'application/json'
}

export default async function(weatherParams) {
  let requestUrl = WEATHER_API_ENDPOINT + qs.stringify(weatherParams, { addQueryPrefix: true })

  fetch(requestUrl, {
    method: 'GET',
    headers: HEADERS
  })
}