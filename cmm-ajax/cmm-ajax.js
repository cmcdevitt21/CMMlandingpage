/*
    Author:  Colby McDEvitt
    Class:   Web & Distributed Programming 
    Project: Ajax intro exmaple
    Session: su18-cpsc-24700-lt1
   Description:  A quick intro to using ajax
         June 20, 2018
*/

function loadAjax(){
     // Load the Mustang index file.
     var ajaxRequest = new XMLHttpRequest();
     ajaxRequest.open('GET', 'https://cmmustang-data.azurewebsites.net/f982n38tfz.json');
     ajaxRequest.onload = function() {
         console.log("AJAX JSON:" + ajaxRequest.responseText);
         document.getElementById("ajax").innerHTML = ajaxRequest.responseText;
         var ajaxArr = JSON.parse(ajaxRequest.responseText);
     }
     ajaxRequest.send();
}