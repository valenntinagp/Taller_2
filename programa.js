// Crear el mapa centrado en las coordenadas de Barrio Timiza
var map = L.map('map').setView([4.6132478916831055, -74.15809135935153], 13);

// Añadir la capa de mapa de OpenStreetMap
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Añadir controles de dibujo de Leaflet-Geoman, sin la opción de dibujar marcadores
map.pm.addControls({
    position: 'topleft',
    drawMarker: false
});

// Cargar el archivo GeoJSON utilizando leaflet-omnivore
omnivore.geojson('data/timiza.geojson').addTo(map);

// Si quieres también agregar un popup a la capa cargada
omnivore.geojson('timiza.geojson').on('ready', function() {
    this.getLayers().forEach(function(layer) {
        layer.bindPopup('<b>' + layer.feature.properties.name + '</b>');
    });
});
