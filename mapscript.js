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
    **Data Import
        Marker Styling
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
var googleLayer = new L.Google('HYBRID'); 
map.addLayer(googleLayer);
//
//Zoom control reposition
//map.zoomControl.setPosition('topright');
map.zoomControl.setPosition('topleft');
//Center point on click
map.featureLayer.on('click', function(e) {
    map.panTo(e.layer.getLatLng());
});
//Zoom to double click position
map.on('dblclick', function(e) {
    map.setView(e.latlng, map.getZoom() + 1);
});
//
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
//Data Import
omnivore.csv('https://docs.google.com/spreadsheet/pub?key=0At2ing38lCbddG9rR1BHRGh5bG1tZ19oclMxbi0xeFE&output=csv')
    .on('ready', function(layer) { 
        // Customizing marker styles based on an attribute. 
        this.eachLayer(function(marker){
            //Area colors
            if (marker.toGeoJSON().properties.EstateID === '1') { 
                if (marker.toGeoJSON().properties.IndustryID === '1') {
                    marker.setIcon(L.mapbox.marker.icon({ 
                        'marker-symbol': 'slaughterhouse',
                        'marker-color': '#f1f075', 
                        'marker-size': 'small'
                    }));
                    } else {
                    marker.setIcon(L.mapbox.marker.icon({ 
                        'marker-color': '#f1f075', 
                        'marker-size': 'small' 
                    }))
                    }; 
            } else if (marker.toGeoJSON().properties.EstateID === '2') { 
                if (marker.toGeoJSON().properties.IndustryID === '1') {
                    marker.setIcon(L.mapbox.marker.icon({ 
                        'marker-symbol': 'slaughterhouse',
                        'marker-color': '#f86767', 
                        'marker-size': 'small'
                    }));
                    } else {
                    marker.setIcon(L.mapbox.marker.icon({ 
                        'marker-color': '#f86767', 
                        'marker-size': 'small' 
                    }))
                    }; 
            } else if (marker.toGeoJSON().properties.EstateID === '3') { 
                if (marker.toGeoJSON().properties.IndustryID === '1') {
                    marker.setIcon(L.mapbox.marker.icon({ 
                        'marker-symbol': 'slaughterhouse',
                        'marker-color': '#7ec9b1', 
                        'marker-size': 'small'
                    }));
                    } else {
                    marker.setIcon(L.mapbox.marker.icon({ 
                        'marker-color': '#7ec9b1', 
                        'marker-size': 'small' 
                    }))
                    };
            } else if (marker.toGeoJSON().properties.EstateID === '4') { 
                if (marker.toGeoJSON().properties.IndustryID === '1') {
                    marker.setIcon(L.mapbox.marker.icon({ 
                        'marker-symbol': 'slaughterhouse',
                        'marker-color': '#fa946e', 
                        'marker-size': 'small'
                    }));
                    } else {
                    marker.setIcon(L.mapbox.marker.icon({ 
                        'marker-color': '#fa946e', 
                        'marker-size': 'small' 
                    }));  
                  };
            } else if (marker.toGeoJSON().properties.EstateID === '5') { 
                if (marker.toGeoJSON().properties.IndustryID === '1') {
                    marker.setIcon(L.mapbox.marker.icon({ 
                        'marker-symbol': 'slaughterhouse',
                        'marker-color': '#a3e46b', 
                        'marker-size': 'small' 
                    }));
                    } else {
                    marker.setIcon(L.mapbox.marker.icon({ 
                        'marker-color': '#a3e46b', 
                        'marker-size': 'small' 
                    }))
                    };
            } else if (marker.toGeoJSON().properties.EstateID === '6') { 
                if (marker.toGeoJSON().properties.IndustryID === '1') {
                    marker.setIcon(L.mapbox.marker.icon({ 
                        'marker-symbol': 'slaughterhouse',
                        'marker-color': '#1087bf', 
                        'marker-size': 'small' 
                    }));
                    } else {
                    marker.setIcon(L.mapbox.marker.icon({ 
                        'marker-color': '#1087bf', 
                        'marker-size': 'small' 
                    }))
                    };
            } else if (marker.toGeoJSON().properties.EstateID === '7') { 
                if (marker.toGeoJSON().properties.IndustryID === '1') {
                    marker.setIcon(L.mapbox.marker.icon({ 
                        'marker-symbol': 'slaughterhouse',
                        'marker-color': '#d27591', 
                        'marker-size': 'small' 
                    }));
                    } else {
                    marker.setIcon(L.mapbox.marker.icon({ 
                        'marker-color': '#d27591', 
                        'marker-size': 'small' 
                    }))
                    };
            } else if (marker.toGeoJSON().properties.EstateID === '8') { 
                if (marker.toGeoJSON().properties.IndustryID === '1') {
                    marker.setIcon(L.mapbox.marker.icon({ 
                        'marker-symbol': 'slaughterhouse',
                        'marker-color': '#c091e6', 
                        'marker-size': 'small' 
                    }));
                    } else {
                    marker.setIcon(L.mapbox.marker.icon({ 
                        'marker-color': '#c091e6', 
                        'marker-size': 'small' 
                    }))
                    };
            } else if (marker.toGeoJSON().properties.EstateID === '9') { 
                if (marker.toGeoJSON().properties.IndustryID === '1') {
                    marker.setIcon(L.mapbox.marker.icon({ 
                        'marker-symbol': 'slaughterhouse',
                        'marker-color': '#b7ddf3', 
                        'marker-size': 'small' 
                    }));
                    } else {
                    marker.setIcon(L.mapbox.marker.icon({ 
                        'marker-color': '#b7ddf3', 
                        'marker-size': 'small' 
                    }))
                    };
            } else if (marker.toGeoJSON().properties.EstateID === '10') { 
                if (marker.toGeoJSON().properties.IndustryID === '1') {
                    marker.setIcon(L.mapbox.marker.icon({ 
                        'marker-symbol': 'slaughterhouse',
                        'marker-color': '#cccccc',
                        'marker-size': 'small'
                    }));
                    } else {
                    marker.setIcon(L.mapbox.marker.icon({ 
                        'marker-color': '#cccccc',
                        'marker-size': 'small' 
                    }))
                    };
            } else { 
                marker.setIcon(L.mapbox.marker.icon({})); 
            }
            //Industry icons
                // Bind a popup to each icon based on the same properties 
            marker.bindPopup('<strong>' + marker.toGeoJSON().properties.title + '</strong>' + '</br>' + marker.toGeoJSON().properties.Description); 
            //Info Pane Content
            marker.on('click', function(e) {
                // Force the popup closed.
                // e.layer.closePopup();
                infopane.className = 'fill-lighten3 offcanvas-right animate pin-right keyline-left active';
                // var feature = e.layer.feature;
                var info = '<h2 class="center">' + marker.toGeoJSON().properties.title + '</h2>' + '</br>' + '<h3>' + marker.toGeoJSON().properties.Estate + '</h3>' + '<h4>Industry: ' + marker.toGeoJSON().properties.Industry + '</h4>' + '</br>' + '<strong>Latitude: </strong>' + e.latlng.lat + '</br>' + '<strong>Longitude: </strong>' + e.latlng.lng + '</br><p>' + marker.toGeoJSON().properties.Description + '</p>';
                //feature.getLatLng() 
                document.getElementById('info').innerHTML = info;
            });
                 //Estate filter Pane
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
                township.className = 'control-button row2 col12 button center align-middle';
                bompai.className = 'control-button row2 col12 button center align-middle';
                tokarawa.className = 'control-button row2 col12 button center align-middle';
                challawa.className = 'control-button row2 col12 button center align-middle';
                sharada.className = 'control-button row2 col12 button center align-middle';
                jogana.className = 'control-button row2 col12 button center align-middle';
                dawanau.className = 'control-button row2 col12 button center align-middle';
                zaria.className = 'control-button row2 col12 button center align-middle';
                hadejia.className = 'control-button row2 col12 button center align-middle';
                misc.className = 'control-button row2 col12 button center align-middle';
                this.className = 'control-button row2 col12 button center align-middle active';
                map.featureLayer.setFilter(function(f) {
                    // Returning true for all markers shows everything.
                    return true;
                });
                map.fitBounds(map.featureLayer.getBounds());
                return false;
            };
            //Show bompai
            bompai.onclick = function() {
                township.className = 'control-button row2 col12 button center align-middle';
                all.className = 'control-button row2 col12 button center align-middle';
                tokarawa.className = 'control-button row2 col12 button center align-middle';
                challawa.className = 'control-button row2 col12 button center align-middle';
                sharada.className = 'control-button row2 col12 button center align-middle';
                jogana.className = 'control-button row2 col12 button center align-middle';
                dawanau.className = 'control-button row2 col12 button center align-middle';
                zaria.className = 'control-button row2 col12 button center align-middle';
                hadejia.className = 'control-button row2 col12 button center align-middle';
                misc.className = 'control-button row2 col12 button center align-middle';
                this.className = 'control-button row2 col12 button center align-middle active';
                map.featureLayer.setFilter(function(f) {
                    return f.properties['EstateID'] === '1';
                });
                map.fitBounds(map.featureLayer.getBounds());
                return false;
            };
            //Show township
            township.onclick = function() {
                bompai.className = 'control-button row2 col12 button center align-middle';
                all.className = 'control-button row2 col12 button center align-middle';
                tokarawa.className = 'control-button row2 col12 button center align-middle';
                challawa.className = 'control-button row2 col12 button center align-middle';
                sharada.className = 'control-button row2 col12 button center align-middle';
                jogana.className = 'control-button row2 col12 button center align-middle';
                dawanau.className = 'control-button row2 col12 button center align-middle';
                zaria.className = 'control-button row2 col12 button center align-middle';
                hadejia.className = 'control-button row2 col12 button center align-middle';
                misc.className = 'control-button row2 col12 button center align-middle';
                this.className = 'control-button row2 col12 button center align-middle active';
                map.featureLayer.setFilter(function(f) {
                    return f.properties['EstateID'] === '2';
                });
                map.fitBounds(map.featureLayer.getBounds());
                return false;
            };
            //Show tokarawa
            tokarawa.onclick = function() {
                township.className = 'control-button row2 col12 button center align-middle';
                bompai.className = 'control-button row2 col12 button center align-middle';
                all.className = 'control-button row2 col12 button center align-middle';
                challawa.className = 'control-button row2 col12 button center align-middle';
                sharada.className = 'control-button row2 col12 button center align-middle';
                jogana.className = 'control-button row2 col12 button center align-middle';
                dawanau.className = 'control-button row2 col12 button center align-middle';
                zaria.className = 'control-button row2 col12 button center align-middle';
                hadejia.className = 'control-button row2 col12 button center align-middle';
                misc.className = 'control-button row2 col12 button center align-middle';
                this.className = 'control-button row2 col12 button center align-middle active';
                map.featureLayer.setFilter(function(f) {
                    return f.properties['EstateID'] === '3';
                });
                map.fitBounds(map.featureLayer.getBounds().pad(0.5));
                return false;
            };
            //Show jogana
            jogana.onclick = function() {
                township.className = 'control-button row2 col12 button center align-middle';
                bompai.className = 'control-button row2 col12 button center align-middle';
                tokarawa.className = 'control-button row2 col12 button center align-middle';
                challawa.className = 'control-button row2 col12 button center align-middle';
                sharada.className = 'control-button row2 col12 button center align-middle';
                all.className = 'control-button row2 col12 button center align-middle';
                dawanau.className = 'control-button row2 col12 button center align-middle';
                zaria.className = 'control-button row2 col12 button center align-middle';
                hadejia.className = 'control-button row2 col12 button center align-middle';
                misc.className = 'control-button row2 col12 button center align-middle';
                this.className = 'control-button row2 col12 button center align-middle active';
                map.featureLayer.setFilter(function(f) {
                    return f.properties['EstateID'] === '4';
                });
                map.setView([12.029, 8.701], 15);
                //map.fitBounds(map.featureLayer.getBounds());
                return false;
            };
            //Show challawa
            challawa.onclick = function() {
                township.className = 'control-button row2 col12 button center align-middle';
                bompai.className = 'control-button row2 col12 button center align-middle';
                tokarawa.className = 'control-button row2 col12 button center align-middle';
                all.className = 'control-button row2 col12 button center align-middle';
                sharada.className = 'control-button row2 col12 button center align-middle';
                jogana.className = 'control-button row2 col12 button center align-middle';
                dawanau.className = 'control-button row2 col12 button center align-middle';
                zaria.className = 'control-button row2 col12 button center align-middle';
                hadejia.className = 'control-button row2 col12 button center align-middle';
                misc.className = 'control-button row2 col12 button center align-middle';
                this.className = 'control-button row2 col12 button center align-middle active';
                map.featureLayer.setFilter(function(f) {
                    return f.properties['EstateID'] === '5';
                });
                map.fitBounds(map.featureLayer.getBounds().pad(0.25));
                return false;
            };
            //Show sharada
            sharada.onclick = function() {
                township.className = 'control-button row2 col12 button center align-middle';
                bompai.className = 'control-button row2 col12 button center align-middle';
                tokarawa.className = 'control-button row2 col12 button center align-middle';
                challawa.className = 'control-button row2 col12 button center align-middle';
                all.className = 'control-button row2 col12 button center align-middle';
                jogana.className = 'control-button row2 col12 button center align-middle';
                dawanau.className = 'control-button row2 col12 button center align-middle';
                zaria.className = 'control-button row2 col12 button center align-middle';
                hadejia.className = 'control-button row2 col12 button center align-middle';
                misc.className = 'control-button row2 col12 button center align-middle';
                this.className = 'control-button row2 col12 button center align-middle active';
                map.featureLayer.setFilter(function(f) {
                    return f.properties['EstateID'] === '6';
                });
                map.fitBounds(map.featureLayer.getBounds());
                return false;
            };
            //Show dawanau
            dawanau.onclick = function() {
                township.className = 'control-button row2 col12 button center align-middle';
                bompai.className = 'control-button row2 col12 button center align-middle';
                tokarawa.className = 'control-button row2 col12 button center align-middle';
                challawa.className = 'control-button row2 col12 button center align-middle';
                sharada.className = 'control-button row2 col12 button center align-middle';
                jogana.className = 'control-button row2 col12 button center align-middle';
                all.className = 'control-button row2 col12 button center align-middle';
                zaria.className = 'control-button row2 col12 button center align-middle';
                hadejia.className = 'control-button row2 col12 button center align-middle';
                misc.className = 'control-button row2 col12 button center align-middle';
                this.className = 'control-button row2 col12 button center align-middle active';
                map.featureLayer.setFilter(function(f) {
                    return f.properties['EstateID'] === '7';
                });
                map.fitBounds(map.featureLayer.getBounds());
                return false;
            };
            //Show Hadejia Road
            hadejia.onclick = function() {
                township.className = 'control-button row2 col12 button center align-middle';
                bompai.className = 'control-button row2 col12 button center align-middle';
                tokarawa.className = 'control-button row2 col12 button center align-middle';
                challawa.className = 'control-button row2 col12 button center align-middle';
                sharada.className = 'control-button row2 col12 button center align-middle';
                jogana.className = 'control-button row2 col12 button center align-middle';
                dawanau.className = 'control-button row2 col12 button center align-middle';
                zaria.className = 'control-button row2 col12 button center align-middle';
                all.className = 'control-button row2 col12 button center align-middle';
                misc.className = 'control-button row2 col12 button center align-middle';
                this.className = 'control-button row2 col12 button center align-middle active';
                map.featureLayer.setFilter(function(f) {
                   return f.properties['EstateID'] === '8';
                });
                //map.fitBounds(map.featureLayer.getBounds().pad(0.5));
                map.setView([12.084, 8.63], 12);
                return false;
            };
            //Show zaria Road
            zaria.onclick = function() {
                township.className = 'control-button row2 col12 button center align-middle';
                bompai.className = 'control-button row2 col12 button center align-middle';
                tokarawa.className = 'control-button row2 col12 button center align-middle';
                challawa.className = 'control-button row2 col12 button center align-middle';
                sharada.className = 'control-button row2 col12 button center align-middle';
                jogana.className = 'control-button row2 col12 button center align-middle';
                dawanau.className = 'control-button row2 col12 button center align-middle';
                hadejia.className = 'control-button row2 col12 button center align-middle';
                all.className = 'control-button row2 col12 button center align-middle';
                misc.className = 'control-button row2 col12 button center align-middle';
                this.className = 'control-button row2 col12 button center align-middle active';
                map.featureLayer.setFilter(function(f) {
                    return f.properties['EstateID'] === '9';
                });
                //map.fitBounds(map.featureLayer.getBounds().pad(0.5));
                map.setView([11.909, 8.549], 13);
                return false;
            };
            //Show Misc/Other
            misc.onclick = function() {
                township.className = 'control-button row2 col12 button center align-middle';
                bompai.className = 'control-button row2 col12 button center align-middle';
                tokarawa.className = 'control-button row2 col12 button center align-middle';
                challawa.className = 'control-button row2 col12 button center align-middle';
                sharada.className = 'control-button row2 col12 button center align-middle';
                jogana.className = 'control-button row2 col12 button center align-middle';
                dawanau.className = 'control-button row2 col12 button center align-middle';
                zaria.className = 'control-button row2 col12 button center align-middle';
                hadejia.className = 'control-button row2 col12 button center align-middle';
                all.className = 'control-button row2 col12 button center align-middle';
                this.className = 'control-button row2 col12 button center align-middle active';
                map.featureLayer.setFilter(function(f) {
                    return f.properties['EstateID'] === '10';
                });
                //map.fitBounds(map.featureLayer.getBounds().pad(0.5));
                map.setView([11.983, 8.588], 12);
                return false;
            };
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
        });
        map.fitBounds(this.getBounds()); 
    })
    .addTo(map);