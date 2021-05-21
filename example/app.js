import 'babel-polyfill'

import ForkMeConntrol from '@geolonia/mbgl-fork-me-control'
import GestureHandling from '..'

const map = new window.geolonia.Map({
  container: '#map',
  style: 'https://geolonia.github.io/tiny-tileserver/style.json',
  attributionControl: true,
  hash: true,
  localIdeographFontFamily: "sans-serif",
  interactive: true
});

map.addControl(new ForkMeConntrol({
  url: 'https://github.com/geolonia/mbgl-gesture-handling',
}));

// new GestureHandling().addTo(map);
