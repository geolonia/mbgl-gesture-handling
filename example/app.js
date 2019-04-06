import 'babel-polyfill'

import TileCloudControl from '@tilecloud/mbgl-tilecloud-control'
import ForkMeConntrol from '@tilecloud/mbgl-fork-me-control'
import GestureHandling from '../src'

const map = new mapboxgl.Map({
  container: 'map',
  style: 'https://tilecloud.github.io/tiny-tileserver/style.json',
  attributionControl: true,
  hash: true,
  localIdeographFontFamily: "sans-serif",
  interactive: true
});

map.addControl(new mapboxgl.NavigationControl());
map.addControl(new mapboxgl.GeolocateControl());
map.addControl(new TileCloudControl());
map.addControl(new ForkMeConntrol({
  url: 'https://github.com/tilecloud/mbgl-gesture-handling',
}));

new GestureHandling().addTo(map);

const map2 = new mapboxgl.Map({
  container: 'map2',
  style: 'https://tilecloud.github.io/tiny-tileserver/style.json',
  attributionControl: true,
  hash: true,
  localIdeographFontFamily: "sans-serif",
  interactive: true
});

map2.addControl(new mapboxgl.NavigationControl());
map2.addControl(new mapboxgl.GeolocateControl());
map2.addControl(new TileCloudControl());
map2.addControl(new ForkMeConntrol({
  url: 'https://github.com/tilecloud/mbgl-gesture-handling',
}));

new GestureHandling({
  textMessage: "Altを押してね"
}).addTo(map2);


