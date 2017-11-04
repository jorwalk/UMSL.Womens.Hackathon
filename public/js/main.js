$(document).ready(function() {
    console.log('HELLO')
    var map = new ol.Map({
        target: 'map',
        layers: [
            new ol.layer.Tile({
                source: new ol.source.OSM()
            })
        ],
        view: new ol.View({
            center: ol.proj.fromLonLat(['0','0']),
            zoom: 5
        })
    });

    map.getView().setCenter(ol.proj.transform(['38.6270', '90.1994'],'EPSG:3857', 'EPSG:4326'))

});