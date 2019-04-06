# @tilecloud/mbgl-gesture-handling

[![Build Status](https://travis-ci.org/tilecloud/mbgl-gesture-handling.svg?branch=master)](https://travis-ci.org/tilecloud/mbgl-gesture-handling)

[![npm version](https://badge.fury.io/js/%40tilecloud%2Fmbgl-gesture-handling.svg)](https://badge.fury.io/js/%40tilecloud%2Fmbgl-gesture-handling)

![](https://www.evernote.com/l/ABV-KmK0NkVCQKskoYvAAFrBrepOXzi4XREB/image.png)

This is a Mapbox GL JS plugin that handles wheel and touch gestures to prevent unexpected zooming and moving for the map embeded in your web site.

## Demo

https://tilecloud.github.io/mbgl-gesture-handling/

## How to use

```
$ npm install @tilecloud/mbgl-gesture-handling
```

```
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
