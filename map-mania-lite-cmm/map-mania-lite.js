

/*Author: Colby McDevitt
    Class: Web & Distributed Programming, CPSC 247; 
     Project: Map Mania Lite; 
     Session: su18-cpsc-247-lt1
    Description:  Map app using Google API and  JavaScript
         May 29, 2018*/

var cmMap;

function initMap(){
    cmMap = new google.maps.Map(document.getElementById("cmmMapID"),{center: {lat: 41.6475, lng: -88.0895}, zoom: 4});

    var mark1;
    mark1 = new google.maps.Marker({position:{lat: 30.2697, lng: -87.5868},map:cmMap});

    google.maps.event.addListener(cmMap, 'idle',function(){updateGame()});


}
function updateGame(){
    console.log("updateGame() called");
    var zoomLevel = cmMap.getZoom();
    var inbounds=false;
    /* philadelphia */
    if (cmMap.getBounds().contains({lat: 39.9526, lng: -75.1652})){
        inbounds=true;
    }
    console.log("inBounds: "+inbounds+" zoomLevel: "+zoomLevel);

}

function initApp() {
    window.alert("it loaded App onload");
}