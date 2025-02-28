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

// Coordenadas de ejemplo para el polígono alrededor del barrio Timiza (puedes ajustar más si lo deseas)
var polygonCoordinates = [
    [4.613500, -74.159000],
    [4.612500, -74.158500],
    [4.611800, -74.157000],
    [4.612200, -74.155500],
    [4.613000, -74.156000]
];

// Crear el polígono y agregarlo al mapa
var polygon = L.polygon(polygonCoordinates, {
    color: 'blue',       // Color del borde del polígono
    fillColor: 'cyan',   // Color de relleno del polígono
    fillOpacity: 0.5     // Opacidad del relleno
}).addTo(map);

// Agregar un popup en el centro del polígono
polygon.bindPopup("<b>Barrio Timiza</b><br>Zona delimitada del barrio.").openPopup();
