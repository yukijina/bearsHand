// Maps
var map = new GMaps({
  div: '.map',
  lat: 37.8053066,
  lng: -122.4340696,
  zoom: 12
});

map.addMarker({
  lat: 37.8053066,
  lng: -122.4340696,
  title: 'Fort Mason',
  infoWindow: {
    content: "<p>Fort Mason - Farmer's Market ever Sunday!</p>"
  }
});
