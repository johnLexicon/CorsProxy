# Cors Proxy

A proxy server to avoid CORS errors.

## Installation

Use the package manager npm:

```bash
npm install
```

## Start

Start the server (the server starts on port 3000):

```bash
npm start
```

## Usage

Give the url that you want to retrieve data from as a query paramenter
Example:
url you want to retrieve from: https://www.metaweather.com/api/location/search/?query=london

Url using the proxy server: http://localhost:3000/?url=https://www.metaweather.com/api/location/search/?query=london

Example with fecth:

```javascript
fetch("http://localhost:3000/?url=https://www.metaweather.com/api/location/search/?query=london")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
```
