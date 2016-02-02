
var map;

function loadMap() {
	L.mapbox.accessToken = 'pk.eyJ1IjoiZGViYWtlbCIsImEiOiJjMWVJWEdFIn0.WtaUd8Rh0rgHRiyEZNzSjQ';

	map = L.mapbox.map('map', 'mapbox.streets')
    .setView([38.1089, 13.3545], 4);


    L.control.locate().addTo(map);
    var sidebar = L.control.sidebar('sidebar').addTo(map);
}
function loadGeoJSON(){
	var featureLayer = L.mapbox.featureLayer()
		.loadURL('data/features.geojson')
		.addTo(map);
}

function init(){
	loadMap();
	loadGeoJSON();
}
window.onload = init();

