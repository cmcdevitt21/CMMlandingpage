

var cmMap;
var passArr=[];
var index = 0;
var scoreTot = [];
var userArray = [];
var currentCity;
var W =0;



var cityLived = [
    {"content":"Chicago", "coordinates":{"lat": 41.8781, "lng": -87.6298},"iconImagePath":"redmarker.png", "Hint":"Windy City, Go Cubbies Go!","points":10 },
    {"content":"Fort Wayne", "coordinates":{"lat": 41.0793, "lng": -85.1394},"iconImagePath":"redmarker.png", "Hint":"Big City North Eastern Indiana","points":9 },
    {"content":"Cedar Rapids", "coordinates":{"lat": 41.9779, "lng": -91.6656},"iconImagePath":"redmarker.png", "Hint":"Big City Eastern Iowa","points":8 },
    {"content":"Fort Collins", "coordinates":{"lat": 40.5853, "lng": -105.0844},"iconImagePath":"redmarker.png", "Hint":"Foot Hills of the CO Rockies","points":7 },
    {"content":"Saint Paul", "coordinates":{"lat": 44.9537, "lng": -93.0900},"iconImagePath":"redmarker.png", "Hint":"One of the Twin Cities and Captial of the state with 10,000 lakes","points":6 },
    {"content":"Philadelphia","coordinates":{"lat": 39.9526, "lng": -75.1652},"iconImagePath":"redmarker.png", "Hint":"City of Brotherly love","points":5 },
    {"content":"Oslo","coordinates":{"lat": 59.9139, "lng": 10.7522},"iconImagePath":"redmarker.png", "Hint": "Capital of Norway","points":4 },
    {"content":"Cairo","coordinates":{"lat": 30.0444, "lng": 31.2357},"iconImagePath":"redmarker.png", "Hint":"You can see the Nile and Pyramids","points":3 },
    {"content":"Sydney","coordinates":{"lat": -33.8688, "lng": 151.2093},"iconImagePath":"redmarker.png", "Hint":"Large City in Australia","points":2 },
    {"content":"Lima","coordinates":{"lat": -12.0464, "lng": -77.0428},"iconImagePath":"redmarker.png", "Hint":"Capital of Peru","points":1},
    {"content":"London","coordinates":{"lat": 51.5074, "lng": -0.1278},"iconImagePath":"redmarker.png", "Hint":"Capital of England","points":10},
    {"content":"Madrid","coordinates":{"lat": 40.4168, "lng": -3.7038},"iconImagePath":"redmarker.png", "Hint":"Capital of Spain","points":9},
    {"content":"Tokyo","coordinates":{"lat": 35.6895, "lng": 139.6917},"iconImagePath":"redmarker.png", "Hint":"Big City of Japan","points":8},
    {"content":"Rio de Janeiro","coordinates":{"lat": -22.9068, "lng": -43.1729},"iconImagePath":"redmarker.png", "Hint":"Big City in Brazil","points":4},
    {"content":"New Delhi","coordinates":{"lat": 28.6139, "lng": 77.2090},"iconImagePath":"redmarker.png", "Hint":"Big City in India","points":5},
    {"content":"Dubai","coordinates":{"lat": 25.2048, "lng": 55.2708},"iconImagePath":"redmarker.png", "Hint":"Big City in United Arb Emirates","points":6},
    {"content":"Casablanca","coordinates":{"lat": 33.5731, "lng": -7.5898},"iconImagePath":"redmarker.png", "Hint":"City in Morocco, classic movie","points":7},
    {"content":"Rome","coordinates":{"lat": 41.9028, "lng": 12.4964},"iconImagePath":"redmarker.png", "Hint":"Home of the Vatican, Italy","points":3},
    {"content":"Athens","coordinates":{"lat": 37.9838, "lng": 23.7275},"iconImagePath":"redmarker.png", "Hint":"Big City in Greece","points":2},
    {"content":"Cape Town","coordinates":{"lat": -33.9249, "lng": 18.4241},"iconImagePath":"redmarker.png", "Hint":"Welcome to South Africa","points":1}
];
function init(){
   
     starthttp = new XMLHttpRequest();
     starthttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            userArray = JSON.parse(this.responseText);
            console.log(this.responseText);
        }
    };

    starthttp.open("GET", "load-users.php", true);
    starthttp.send();  
    console.log(userArray);
    

}

function cheatWin(){
    winCheck(7);
}

function initMap(){
    cmMap = new google.maps.Map(document.getElementById("cmmMapID"),{center: {lat: 41.6475, lng: -88.0895}, zoom: 6});
    index=Math.floor(Math.random()*10)+Math.floor(Math.random()*10);
    currentCity=cityLived[index];
    updateGame(currentCity);

    google.maps.event.addListener(cmMap, 'idle',function(){updateGame(cityLived[index])});


}
function hideText(){
    var getPass =document.getElementById("password").value;
    passArr.push(getPass.charAt(getPass.length-1));
    var hidepass="*";
    if(passArr.length>1){
        for( var t=1;t<passArr.length-1; t++){
        hidepass=hidepass+"*";
            }
        }
    
    document.getElementById("password").value =hidepass;
}

function userLogin(){
    var count = 0;
    var userName = document.getElementById("username").value;
    if(passArr.length != 0){
    var passWord=passArr[0].toString();
    for( var i=1;i<passArr.length;i++){
        passWord=passWord+passArr[i].toString();
        }
    }
    
     xmlhttp = new XMLHttpRequest();
     xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            userArray = JSON.parse(this.responseText);
        }
    };

    xmlhttp.open("GET", "load-users.php", true);
    xmlhttp.send();  
    console.log(userArray);

    if(userArray.length>0){
    for(var i=0;i<userArray.length;i++){
        var p = userArray[i].userName;
        var e =userArray[i].passWord;
        var d = p.localeCompare(userName);
        var f = e.localeCompare(passWord);

        if(d==0){
            if(f!=0){
                document.getElementById("loginMessage").innerHTML="Invalid Password";
                count++;
                passArr=[];
            }else if(f==0){
                scoreTot.push(userArray[i].score);
                getScore(scoreTot);
                count++;
                passArr=[];
                document.getElementById("password").style.visibility="hidden";
                document.getElementById("login").style.visibility="hidden";
                document.getElementById("newUser").style.visibility="hidden";
                document.getElementById("scoreBoard").style.visibility="visible";
                sortArr();

            }
        }

   
    }
    }
    if (count !=0){

    }else{
        document.getElementById("loginMessage").innerHTML="Invalid UserName, if new user click 'Create Account'";
        passArr=[];
    }

}

function newUser(){
    var count = 0;
    var userName = document.getElementById("username").value;
    if(passArr.length != 0){
    var passWord=passArr[0].toString();
    for( var i=1;i<passArr.length;i++){
        passWord=passWord+passArr[i].toString();
        }
    }
    newhttp = new XMLHttpRequest();
    newhttp.onreadystatechange = function() {
       if (this.readyState == 4 && this.status == 200) {
           userArray = JSON.parse(this.responseText);
       }
   };

   newhttp.open("GET", "load-users.php", true);
   newhttp.send(); 
   console.log(userArray);

    if(userArray.length>0){
    for(var i=0;i<userArray.length;i++){
        var p = userArray[i].userName;
        var e =userArray[i].passWord;
        var d = p.localeCompare(userName);
        var f = e.localeCompare(passWord);

        if(d==0){
            if(f!=0){
                document.getElementById("loginMessage").innerHTML="User already exist, but invalid Password";
                count++;
                passArr=[];
            }else if(f==0){
                document.getElementById("loginMessage").innerHTML="User already exist, you are logged in";
                scoreTot.push(userArray[i].score);
                getScore(scoreTot);
                count++;
                passArr=[];
                document.getElementById("password").style.visibility="hidden";
                document.getElementById("login").style.visibility="hidden";
                document.getElementById("newUser").style.visibility="hidden";
                document.getElementById("scoreBoard").style.visibility="visible";
                sortArr();

            }
        }else{
            ;
        }
   
        }
    
    if (count !=0){
        console.log("count not zero");
    }else{
        var addUser = {"userName":userName,"passWord":passWord,"score":"0"};
        userArray.push(addUser);
        console.log(userArray);
        sortArr();
    }
        sxmlhttp = new XMLHttpRequest();
        sxmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log('Response: ' + this.responseText);
           
        }
    };
    sxmlhttp.open("POST", "save-users.php", true);
    sxmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    sxmlhttp.send("users=" + JSON.stringify(userArray));
        
        scoreTot.push(userArray[userArray.length-1].score);
        getScore(scoreTot);
        passArr=[];
        document.getElementById("loginMessage").innerHTML="User added";
        document.getElementById("password").style.visibility="hidden";
        document.getElementById("login").style.visibility="hidden";
        document.getElementById("newUser").style.visibility="hidden";
        document.getElementById("scoreBoard").style.visibility="visible";
        

    }
}

function saveScore(){
    console.log(userArray);
    savehttp = new XMLHttpRequest();
     savehttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            userArray = JSON.parse(this.responseText);
        }
    };

    savehttp.open("GET", "load-users.php", true);
    savehttp.send();  
    console.log(userArray);
    
    var count = 0;
    var score=0;
    for(var i=0;i<scoreTot.length; i++){
        score=parseInt(score)+parseInt(scoreTot[i]);
    }
    var name = document.getElementById("username").value;

    if(userArray.length>0){
    for(var i=0;i<userArray.length;i++){
        var p = userArray[i].userName;
        var d = p.localeCompare(name);
    
        if(d==0){
            userArray[i].score=score;
        }
        }
    }
    sortArr();
    console.log(userArray);

    sxmlhttp1 = new XMLHttpRequest();
    sxmlhttp1.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        console.log('Response: ' + this.responseText);
       
    }
};
    sxmlhttp1.open("POST", "save-users.php", true);
    sxmlhttp1.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    sxmlhttp1.send("users=" + JSON.stringify(userArray));
    alert("your new score is "+score);
}

function checkAns(){
    var userTry = document.getElementById("answer").value;
    var a = currentCity.content;

    var t =a.localeCompare(userTry);

    if(t !=0 ){
        alert("Not Correct, make sure to use correct spelling! Try again!");
    }else {
        
        index=Math.floor(Math.random()*10)+Math.floor(Math.random()*10);
        currentCity=cityLived[index];
        updateGame(currentCity);

    }
    
}

function updateGame(cmmarkerProperties){
    console.log("updateGame() called");
    addMarker(cmmarkerProperties);
    getHint(cmmarkerProperties.Hint);

    /* add marker on correct click */
}

function winCheck(W){
    
    if(W>5){
        window.alert("You found 6 places, do you want to save your score? ( cancel to not save)");
        if(window.confirm("save score?")){
            saveScore();
            alert("New Score saved!")
            
        }else{
            open("final-project-cmm.html");
        }

    }
}

function gameInfo(){
    window.alert("Click on locations(cities) on the map below to find 6 locations."+ "\n"+
    "You can type the name of a city ( without the state) into the 'Your Answer' box and click 'Check Answer' to get the next hint."+"\n"+
    "You must click on the icon to get the points, and each city is worth different points."+"\n"
    +"You only get to find 6 locations on each turn, but you can log in/create a username to save your score for next time.");
}

function initApp() {
    console.log("it loaded App onload");
    
}

function getHint(hint){
    document.getElementById("hint").value=hint;
}

function getScore(scoreTot){
    var score=0;
    for(var i=0;i<scoreTot.length; i++){
        score=parseInt(score)+parseInt(scoreTot[i]);
    }
    
    document.getElementById("score").value=score;
    W++;
    winCheck(W);
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
        scoreTot.push(cmmarkerProperties.points);
        getScore(scoreTot);
    });
    
}

function sortArr(){
    for (var y =1; y<userArray.length; y++){

        if (userArray[y-1].score<userArray[y].score){
            var t =userArray[y-1];
            var s = userArray[y];
            userArray[y]=t;
            userArray[y-1]=s;
            sortArr();
        }else{
            ;}
    }
    console.log(userArray);
    if(userArray.length=1){
    document.getElementById("leader").value = userArray[0].score;
    }else if(userArray.length>1){
    document.getElementById("leader").value = userArray[0].score;
    document.getElementById("second").value = userArray[1].score;
    }
}
