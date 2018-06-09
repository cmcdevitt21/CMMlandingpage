

/*Author: Colby McDevitt
    Class: Web & Distributed Programming, CPSC 247; 
     Project: Map Mania Lite; 
     Session: su18-cpsc-247-lt1
    Description:  Map app using Google API and  JavaScript
         May 29, 2018*/

var cmMap;
var index = 0;
var scoreTot = [];

var cityLived = [
    {"content":"Chicago! Current Home", "coordinates":{"lat": 41.8781, "lng": -87.6298},"iconImagePath":"one.png", "nextHint":"Big City Eastern Indiana" },
    {"content":"Fort Wayne, IN: Where I was born!", "coordinates":{"lat": 41.0793, "lng": -85.1394},"iconImagePath":"two.png", "nextHint":"Big City Eastern Iowa" },
    {"content":"Cedar Rapids, IA! first year married", "coordinates":{"lat": 41.9779, "lng": -91.6656},"iconImagePath":"three.png", "nextHint":"Foot Hills of the CO Rockies" },
    {"content":"Fort Collins, CO:  Young and Livin' care-free", "coordinates":{"lat": 40.5853, "lng": -105.0844},"iconImagePath":"four.png", "nextHint":"Twin Cities and 10,000 lakes" },
    {"content":"Saint Paul, MN! Land of nine month long winters!", "coordinates":{"lat": 44.9537, "lng": -93.0900},"iconImagePath":"five.png", "nextHint":"City of Brotherly love" },
    {"content":"Philadelphia, PA!", "coordinates":{"lat": 39.9526, "lng": -75.1652},"iconImagePath":"six.png", "nextHint":"" }
]
function cheatWin(){
    winCheck(7);
}
function initMap(){
    cmMap = new google.maps.Map(document.getElementById("cmmMapID"),{center: {lat: 41.6475, lng: -88.0895}, zoom: 4});

    google.maps.event.addListener(cmMap, 'idle',function(){updateGame(cityLived[index])});


}

function updateGame(cmmarkerProperties){
    console.log("updateGame() called");
    var zoomLevel = cmMap.getZoom();
    var inbounds=false;
    
    /* add marker on correct click */
    if (cmMap.getBounds().contains(cmmarkerProperties.coordinates)){
        inbounds=true;
        addMarker(cmmarkerProperties);
        
        
    }
    console.log("inBounds: "+inbounds+" zoomLevel: "+zoomLevel);

}

function winCheck(T){
    
    if(T>5){
        window.alert("You Win, You found them All!");
        if(window.confirm("Play again?")){
            open("map-mania-cmm.html");
        }else{
            window.close();
        }

    }
}

function gameInfo(){
    window.alert("Click on locations(cities) on the map below to find the 6 location I have lived, if you are close you get a point."+"\n"+"The winner needs to find all 6 locations, they are all in the U.S.");
}

function initApp() {
    console.log("it loaded App onload");
    getHint("where I live now, big city in Illinois");
}

function getHint(hint){
    document.getElementById("hint").value=hint;
}

function getScore(score){
    document.getElementById("score").value=score;
}

function addMarker(cmmarkerProperties){
    var nextMarker = new google.maps.Marker({position:cmmarkerProperties.coordinates, map:cmMap});

    if (cmmarkerProperties.iconImagePath){
        nextMarker.setIcon(cmmarkerProperties.iconImagePath);
    }
    if (cmmarkerProperties.content){
        var infowin = new google.maps.InfoWindow({content:cmmarkerProperties.content});
    }
        nextMarker.addListener('click', function(){
        infowin.open(cmMap, nextMarker);
        scoreTot[index]=1;
        index++;
        var i;
        var aTotal=0;
    for(i=0; i<scoreTot.length; i++){
        aTotal=aTotal+scoreTot[i];
}
    getScore(aTotal);
    winCheck(aTotal);
    });

        

    if (cmmarkerProperties.nextHint){
        getHint(cmmarkerProperties.nextHint);
    }
    
}