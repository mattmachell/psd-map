var map = L.map('mapid').setView([52.486, -1.490], 8),
layer = new L.StamenTileLayer("terrain");

map.addLayer(layer);

teams.map(function(el){
    var marker =  L.marker(el.latlong).addTo(map);
    marker.bindPopup(el.name)
})



