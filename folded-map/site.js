var foldedMap = {
    init: function() {
        var mm = com.modestmaps;
        var self = this;
        var url = 'http://a.tiles.mapbox.com/mapbox/2.0.0/mapbox.natural-earth-2/{Z}/{X}/{Y}.png';
        var provider = new mm.TemplatedMapProvider(url);
        var m = new mm.Map('map', provider);
        m.setCenterZoom(new mm.Location(35,17),2);
        m.addCallback('drawn', function() { self.mapSync(); });
    },
    mapSync: function() {
        var mapClone = $('#map').clone().css('opacity',1).css('z-index',-1);
        $('#mapContainer1').html(mapClone.clone().css('marginLeft','-80px'));
        $('#mapContainer2').html(mapClone.clone().css('marginLeft','-240px'));
        $('#mapContainer3').html(mapClone.clone().css('marginLeft','-400px'));
        $('#mapContainer4').html(mapClone.clone().css('marginLeft','-560px'));
        $('#mapContainer5').html(mapClone.clone().css('marginLeft','-720px'));
        $('#mapContainer6').html(mapClone.clone().css('marginLeft','-880px'));
    }
};

$(document).ready(function () {
    if (!jQuery.browser.webkit) {
        $('#map, #header, .limiter').css('display','none');
        $('<div/>', {
            'id': 'disclaimer',
            'html': '<h3>Ohhh .. This demo requires a <a href="https://www.google.com/chrome">webkit</a> browser.</h3>'
        }).appendTo('body');
    } else {
        foldedMap.init();
    }
});
