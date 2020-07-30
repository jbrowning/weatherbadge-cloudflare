# ⛈ weatherbadge (cloudflare workers edition)

A simple weather badge endpoint for [shields.io](https://shields.io) consumption.

## Usage

Visit [https://shields.io/endpoint](https://shields.io/endpoint) and enter the following url:

```
https://weatherbadge.tenoctober.workers.dev?lat=YOUR_LAT&lon&YOUR_LON
```

## Deploy yourself

1. Fork this repo
2. [Install and configure @cloudflare/wrangler](https://developers.cloudflare.com/workers/quickstart)
3. Modify the default `DEFAULT_LAT`/`DEFAULT_LON` as needed in `index.js`
4. `$ wrangler publish`
5.  💸