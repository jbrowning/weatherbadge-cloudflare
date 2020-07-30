const WEATHER_RAIN = {
  message: "rainy",
  color: "9cf"
}
const WEATHER_COLD = {
  message: "freezing",
  color: "blue"
}
const WEATHER_SUN = {
  message: "sunny",
  color: "yellow"
}
const WEATHER_SNOW = {
  message: "snowy",
  color: "aliceblue"
}
const WEATHER_FOG = {
  message: "foggy",
  color: "lightgray"
}
const WEATHER_CLOUD = {
  message: "cloudy",
  color: "slategray"
}
const DEFAULT_COLOR = "yellow"

const WEATHER_CODE_MAP = {
  freezing_rain_heavy: WEATHER_COLD,
  freezing_rain: WEATHER_COLD,
  freezing_rain_light: WEATHER_COLD,
  freezing_drizzle: WEATHER_COLD,
  ice_pellets_heavy: WEATHER_COLD,
  ice_pellets: WEATHER_COLD,
  ice_pellets_light: WEATHER_COLD,
  snow_heavy: WEATHER_SNOW,
  snow: WEATHER_SNOW,
  snow_light: WEATHER_SNOW,
  flurries: WEATHER_SNOW,
  tstorm: WEATHER_SNOW,
  rain_heavy: WEATHER_RAIN,
  rain: WEATHER_RAIN,
  rain_light: WEATHER_RAIN,
  drizzle: WEATHER_RAIN,
  fog_light: WEATHER_FOG,
  fog: WEATHER_FOG,
  cloudy: WEATHER_CLOUD,
  mostly_cloudy: WEATHER_CLOUD,
  partly_cloudy: WEATHER_SUN,
  mostly_clear: WEATHER_SUN,
  clear: WEATHER_SUN
}

export default function(weatherCode) {
  return WEATHER_CODE_MAP[weatherCode] || {
    message: weatherCode.replace("_", " "),
    color: DEFAULT_COLOR
  }
}