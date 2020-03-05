import 'babel-polyfill'

import GeoloniaControl from '@geolonia/mbgl-geolonia-control'
import ForkMeConntrol from '@geolonia/mbgl-fork-me-control'
import GestureHandling from '..'

const map = new mapboxgl.Map({
  container: 'map',
  style: 'https://geolonia.github.io/tiny-tileserver/style.json',
  attributionControl: true,
  hash: true,
  localIdeographFontFamily: "sans-serif",
  interactive: true
});

map.addControl(new mapboxgl.FullscreenControl());
map.addControl(new mapboxgl.NavigationControl());
map.addControl(new mapboxgl.GeolocateControl());
map.addControl(new GeoloniaControl());
map.addControl(new ForkMeConntrol({
  url: 'https://github.com/geolonia/mbgl-gesture-handling',
}));

new GestureHandling().addTo(map);
