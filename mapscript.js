/*
Table of contents:
Page
    Animation bug fix for panels
Map
    Call Map from MapBox
        - set bounds ([Southwest],[Northeast])
        - disable zoom, fade, and pan (inertia) animations (Looks bad with Google Maps layer)
        - set initial center point and zoom level
    Call Google Map Satellite layer

Map Functionality
    Zoom controls - move to top left
    Center markers on click
    Zoom to double click location on map
    Hide/Show layer
        Function
    Zoom-level based options
        Zoom > 12 : Hide MapBox, Show Google Satellite
        *Hide points when zoomed out

Map UI - Panels and Menues
    UI Toggles
        Show/Hide Navigation
        Show/Hide Info Pane
    Navigation Bar Functionality
    Info Pane Functionality
    Industry Filter Functionality

* Not ready

*/
//Make sure no animation bug occurs
setTimeout(function() {
    document.body.className += ' animate';
}, 0);
//MAP
//Call map and map options set
var map = L.mapbox.map('map', 'everettprogram.hgi93jp5', {
    maxBounds: [
        [11.777, 8.206],
        [12.21, 8.907]
    ],
    zoomAnimation: false,
    fadeAnimation: false,
    inertia: false
}).setView([11.982, 8.545], 12);
map.options.maxZoom = 19;
map.options.minZoom = 11;
//Call Google Map Satellite Layer
var googleLayer = new L.Google('SATELLITE');
map.addLayer(googleLayer);
//MAP CONTROLS
//Zoom control reposition
map.zoomControl.setPosition('topleft');
//Center point on click
map.featureLayer.on('click', function(e) {
    map.panTo(e.layer.getLatLng());
});
//Zoom to double click position
map.on('dblclick', function(e) {
    map.setView(e.latlng, map.getZoom() + 1);
});
//Layer change opacity HideShowLAyer(class,opacity)
function HideShowLayer(matchClass,content)
    {
    var elems = document.getElementsByTagName('*'),i;
    for (i in elems)
        {
        if((" "+elems[i].className+" ").indexOf(" "+matchClass+" ") > -1)
            {
            elems[i].style.opacity = content;
            }
        }
    }
//Zoom level filtering: Google layer and Hide markers at certain zoom level- Problems with Misc and Hadejia and Zaria roads

        map.on('zoomend', function() {
            if (map.getZoom() > 12) {
                document.getElementById('_GMapContainer').style.opacity='1';
                HideShowLayer("leaflet-layer","0");
            } else {
                document.getElementById('_GMapContainer').style.opacity='0';
                HideShowLayer("leaflet-layer","1");
                }
        });
//map.featureLayer.setFilter(function() {
                    //return true; //Show all
                    //});
//map.featureLayer.setFilter(function() {
                    //    return f.properties['type'] === 'Polygon';
                    //});

//MAP UI
//Toggle UI features
//Navigation Hiding
var hidenavpanel = document.getElementById('hide-nav');
var shownavpanel = document.getElementById('show-nav');
var navpane = document.getElementById('control-panel');
hidenavpanel.onclick = function() {
    this.parentNode.className = 'fill-darken1 col12 offcanvas-left animate pin-left keyline-right';
};
shownavpanel.onclick = function() {
    navpane.className = 'fill-darken1 col12 animate pin-left keyline-right active';
};
//Info Pane Hiding
var hideinfopanel = document.getElementById('hide-info');
var showinfopanel = document.getElementById('show-info');
var infopane = document.getElementById('info-pane');
hideinfopanel.onclick = function() {
    this.parentNode.className = 'fill-lighten3 offcanvas-right animate pin-right keyline-left';
};
showinfopanel.onclick = function() {
    infopane.className = 'fill-lighten3 offcanvas-right animate pin-right keyline-left active';
};
//Estate filter Pane
//filter variables
var controls1 = document.getElementById('controls1').children;
var controls2 = document.getElementById('controls2').children;
var all = document.getElementById('filter-all');
var township = document.getElementById('filter-township');
var bompai = document.getElementById('filter-bompai');
var tokarawa = document.getElementById('filter-tokarawa');
var challawa = document.getElementById('filter-challawa');
var sharada = document.getElementById('filter-sharada');
var jogana = document.getElementById('filter-jogana');
var dawanau = document.getElementById('filter-dawanau');
var zaria = document.getElementById('filter-zaria');
var hadejia = document.getElementById('filter-hadejia');
var misc = document.getElementById('filter-misc');
//Show all
all.onclick = function() {
    controls1.className = controls1.className.replace(new RegExp('\b' + active + '\b'),'');
    controls2.className = controls2.className.replace(new RegExp('\b' + active + '\b'),'');
    this.className += ' active';

    map.featureLayer.setFilter(function(f) {
        // Returning true for all markers shows everything.
        return true;
    });
    map.fitBounds(map.featureLayer.getBounds());
    return false;
};
//Show bompai
bompai.onclick = function() {
  controls1.className = controls1.className.replace(new RegExp('\b' + active + '\b'),'');
  controls2.className = controls2.className.replace(new RegExp('\b' + active + '\b'),'');
  this.className += ' active';

    map.featureLayer.setFilter(function(f) {
        return f.properties['EstateID'] === '1';
    });
    map.fitBounds(map.featureLayer.getBounds());
    return false;
};
//Show township
township.onclick = function() {
  controls1.className = controls1.className.replace(new RegExp('\b' + active + '\b'),'');
  controls2.className = controls2.className.replace(new RegExp('\b' + active + '\b'),'');
  this.className += ' active';

    map.featureLayer.setFilter(function(f) {
        return f.properties['EstateID'] === '2';
    });
    map.fitBounds(map.featureLayer.getBounds());
    return false;
};
//Show tokarawa
tokarawa.onclick = function() {
  controls1.className = controls1.className.replace(new RegExp('\b' + active + '\b'),'');
  controls2.className = controls2.className.replace(new RegExp('\b' + active + '\b'),'');
  this.className += ' active';

    map.featureLayer.setFilter(function(f) {
        return f.properties['EstateID'] === '3';
    });
    map.fitBounds(map.featureLayer.getBounds().pad(0.5));
    return false;
};
//Show jogana
jogana.onclick = function() {
  controls1.className = controls1.className.replace(new RegExp('\b' + active + '\b'),'');
  controls2.className = controls2.className.replace(new RegExp('\b' + active + '\b'),'');
  this.className += ' active';

    map.featureLayer.setFilter(function(f) {
        return f.properties['EstateID'] === '4';
    });
    map.setView([12.029, 8.701], 15);
    //map.fitBounds(map.featureLayer.getBounds());
    return false;
};
//Show challawa
challawa.onclick = function() {
  controls1.className = controls1.className.replace(new RegExp('\b' + active + '\b'),'');
  controls2.className = controls2.className.replace(new RegExp('\b' + active + '\b'),'');
  this.className += ' active';

    map.featureLayer.setFilter(function(f) {
        return f.properties['EstateID'] === '5';
    });
    map.fitBounds(map.featureLayer.getBounds().pad(0.25));
    return false;
};
//Show sharada
sharada.onclick = function() {
  controls1.className = controls1.className.replace(new RegExp('\b' + active + '\b'),'');
  controls2.className = controls2.className.replace(new RegExp('\b' + active + '\b'),'');
  this.className += ' active';

    map.featureLayer.setFilter(function(f) {
        return f.properties['EstateID'] === '6';
    });
    map.fitBounds(map.featureLayer.getBounds());
    return false;
};
//Show dawanau
dawanau.onclick = function() {
  controls1.className = controls1.className.replace(new RegExp('\b' + active + '\b'),'');
  controls2.className = controls2.className.replace(new RegExp('\b' + active + '\b'),'');
  this.className += ' active';

    map.featureLayer.setFilter(function(f) {
        return f.properties['EstateID'] === '7';
    });
    map.fitBounds(map.featureLayer.getBounds());
    return false;
};
//Show Hadejia Road
hadejia.onclick = function() {
  controls1.className = controls1.className.replace(new RegExp('\b' + active + '\b'),'');
  controls2.className = controls2.className.replace(new RegExp('\b' + active + '\b'),'');
  this.className += ' active';

    map.featureLayer.setFilter(function(f) {
        return f.properties['EstateID'] === '8';
    });
    //map.fitBounds(map.featureLayer.getBounds().pad(0.5));
    map.setView([12.084, 8.63], 12);
    return false;
};
//Show zaria Road
zaria.onclick = function() {
  controls1.className = controls1.className.replace(new RegExp('\b' + active + '\b'),'');
  controls2.className = controls2.className.replace(new RegExp('\b' + active + '\b'),'');
  this.className += ' active';

    map.featureLayer.setFilter(function(f) {
        return f.properties['EstateID'] === '9';
    });
    //map.fitBounds(map.featureLayer.getBounds().pad(0.5));
    map.setView([11.909, 8.549], 13);
    return false;
};
//Show Misc/Other
misc.onclick = function() {
  controls1.className = controls1.className.replace(new RegExp('\b' + active + '\b'),'');
  controls2.className = controls2.className.replace(new RegExp('\b' + active + '\b'),'');
  this.className += ' active';

    map.featureLayer.setFilter(function(f) {
        return f.properties['EstateID'] === '10';
    });
    //map.fitBounds(map.featureLayer.getBounds().pad(0.5));
    map.setView([11.983, 8.588], 12);
    return false;
};
//Info Pane
map.featureLayer.on('click', function(e) {
    // Force the popup closed.
    e.layer.closePopup();
    infopane.className = 'fill-lighten3 offcanvas-right animate pin-right keyline-left active';
    var feature = e.layer.feature;
    var info = '<h2 class="center">' + feature.properties.title + '</h2>' + '</br>' + '<h3>' + feature.properties.Estate + '</h3>' + '<h4>Industry: ' + feature.properties.Industry + '</h4>' + '</br>' + '<strong>Latitude: </strong>' + e.latlng.lat + '</br>' + '<strong>Longitude: </strong>' + e.latlng.lng + '</br><p>' + feature.properties.description + '</p>';
    document.getElementById('info').innerHTML = info;
});
//Legend / Industry filtering
var indall = document.getElementById('industry-all');
var indleather = document.getElementById('industry-leather');
//Show all industries
indall.onclick = function() {
    indleather.className = 'legend-button center align-middle big button keyline-all dark icon leather';
    this.className = 'legend-button center align-middle big button keyline-all dark active';
    map.featureLayer.setFilter(function(f) {
        return true;
    });
    map.fitBounds(map.featureLayer.getBounds());
    return false;
};
//Show Leather
indleather.onclick = function() {
    indall.className = 'legend-button center align-middle big button keyline-all dark';
    this.className = 'legend-button center align-middle big button dark icon keyline-all leather active';
    map.featureLayer.setFilter(function(f) {
        return f.properties['IndustryID'] === '1';
    });
    map.fitBounds(map.featureLayer.getBounds().pad(0.5));
    return false;
};
