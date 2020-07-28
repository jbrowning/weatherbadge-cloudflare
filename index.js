import qs from 'qs'
// import fetchWeather from './fetch_weather'

const DEFAULT_LAT = '39.9633059'
const DEFAULT_LON = '-86.2024235'
const DEFAULT_WEATHER_PARAMS = {
  apikey: CLIMACELL_API_KEY,
  fields: 'weather_code',
  lat: DEFAULT_LAT,
  lon: DEFAULT_LON,
  unit_system: 'us'
}

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

/**
 * Respond with hello worker text
 * @param {Request} request
 */
async function handleRequest(request) {
  let requestUrl = new URL(request.url)
  let requestParams = qs.parse(requestUrl.search.substr(1))
  let responseBody
  let responseStatus = 200
  let weatherResponse

  const lat = requestParams['lat'] || DEFAULT_LAT
  const lon = requestParams['lon'] || DEFAULT_LON

  let weatherParams = {
    lat,
    lon
  }

  weatherParams = Object.assign(DEFAULT_WEATHER_PARAMS, weatherParams)
  weatherResponse = await fetchWeather(weatherParams)

  responseBody = await weatherResponse.json()

  if (!weatherResponse.ok) {
    responseStatus = 500
  }

  return new Response(JSON.stringify(responseBody), {
    headers: { 'content-type': 'application/json' },
    status: responseStatus
  })
}
