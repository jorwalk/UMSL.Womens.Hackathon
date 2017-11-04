$(document).ready(function() {
    // var map = new ol.Map({
    //     target: 'map',
    //     projection:"EPSG:4326",
    //     layers: [
    //         new ol.layer.Tile({
    //             source: new ol.source.XYZ({
    //                 url: 'https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoiam9yZGFud2Fsa2VyIiwiYSI6ImNpb2Q4YjNrbjA0aGh2Z2txc2V4c2RsYnUifQ.v3q_DsYnHTPVICPHaTWy5Q'
    //             })
    //         })
    //     ],
    //     view: new ol.View({
    //         center: ol.proj.transform(['38.565909', '-90.239566'],'EPSG:3857','EPSG:4326'),
    //         zoom: 5
    //     })
    // });
    // console.log(map.getView().getProjection())
    // map.getView().setCenter(ol.proj.transform(['894672.5', '995003.7'], , ))
    $('#awarenessZipcode').keyup(function() {
        if ($(this).val() == '63119') {
            $('#awarenessContainer').show();
        } else {
            $('#awarenessContainer').hide();
        }
    });
});