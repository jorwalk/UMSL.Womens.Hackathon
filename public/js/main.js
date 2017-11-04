$(document).ready(function() {
    var map = new ol.Map({
        target: 'map',
        layers: [
            new ol.layer.Tile({
                source: new ol.source.XYZ({
                    url: 'https://api.mapbox.com/styles/v1/mapbox/outdoors-v10/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoiam9yZGFud2Fsa2VyIiwiYSI6ImNpb2Q4YjNrbjA0aGh2Z2txc2V4c2RsYnUifQ.v3q_DsYnHTPVICPHaTWy5Q'
                })
            })
        ],
        view: new ol.View({
            center: ol.proj.fromLonLat(['0', '0']),
            zoom: 5
        })
    });
    map.getView().setCenter(ol.proj.transform(['38.6270', '-90.1994'], 'EPSG:3857', 'EPSG:4326'))
});