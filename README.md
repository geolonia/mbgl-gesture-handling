# @tilecloud/mbgl-gesture-handling

[![Build Status](https://travis-ci.org/tilecloud/mbgl-gesture-handling.svg?branch=master)](https://travis-ci.org/tilecloud/mbgl-gesture-handling)
[![npm version](https://badge.fury.io/js/%40tilecloud%2Fmbgl-gesture-handling.svg)](https://badge.fury.io/js/%40tilecloud%2Fmbgl-gesture-handling)

This is a Mapbox GL JS plugin that handles wheel and touch gestures to prevent unexpected zooming and moving for the map embeded in your web site.

## Screenshots

### PC

Users need to use `[alt]` + wheel to zoom them map.

![](https://www.evernote.com/l/ABV-KmK0NkVCQKskoYvAAFrBrepOXzi4XREB/image.png)

### Mobile devide

Users need to use two fingers to move the map.

![](https://www.evernote.com/l/ABU4Ifeia7JOoLdhguNhqw4MOsGev5mdILcB/image.png)

## Demo

https://tilecloud.github.io/mbgl-gesture-handling/

## How to use

```bash
$ npm install @tilecloud/mbgl-gesture-handling
```

```node
import GestureHandling from '@tilecloud/mbgl-gesture-handling'

const map = new mapboxgl.Map({
  ...
});

// Defaults
const options = {
  backgroundColor: 'rgba(0, 0, 0, 0.8)',
  textColor: '#ffffff',
  textMessage: 'Use alt + scroll to zoom the map.',
  textMessageMobile: 'Use two fingers to move the map.',
  timeout: 3000,
}

new GestureHandling(options).addTo(map);
```

## Contributing

```bash
$ git clone git@github.com:tilecloud/mbgl-gesture-handling.git
$ cd mbgl-gesture-handling
$ npm install
$ npm test
$ npm run build
```

### Note for developers

To publish this module:

```
$ npm tag x.x.x
$ git push origin x.x.x
```
