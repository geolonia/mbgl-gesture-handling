import 'babel-polyfill'

import TileCloudControl from '@tilecloud/mbgl-tilecloud-control'
import ForkMeConntrol from '@tilecloud/mbgl-fork-me-control'
import GestureHandling from '..'

const map = new mapboxgl.Map({
  container: 'map',
  style: 'https://tilecloud.github.io/tiny-tileserver/style.json',
  attributionControl: true,
  hash: true,
  localIdeographFontFamily: "sans-serif",
  interactive: true
});

map.addControl(new mapboxgl.FullscreenControl());
map.addControl(new mapboxgl.NavigationControl());
map.addControl(new mapboxgl.GeolocateControl());
map.addControl(new TileCloudControl());
map.addControl(new ForkMeConntrol({
  url: 'https://github.com/tilecloud/mbgl-gesture-handling',
}));

new GestureHandling().addTo(map);
