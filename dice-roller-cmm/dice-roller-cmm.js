/*  Author: Colby McDevitt
    Class: Web & Distributed Programming, CPSC 247; 
     Project: Dice roller; 
     Session: su18-cpsc-247-lt1
    Description:  Dice rolling application using JavaScript
         May 30, 2018
*/

var diceTotal = [];
var diceTotal2 = [];

function rollstart(){
    document.getElementById("rolls").value = Math.floor(Math.random()*6)+1;
}

function rolldice(){
    document.getElementById("roll").value = Math.floor(Math.random()*6)+1;
    diceTotal.push(document.getElementById("roll").value = Math.floor(Math.random()*6)+1);
    document.getElementById("roll1").value = Math.floor(Math.random()*6)+1;
    diceTotal.push(document.getElementById("roll1").value = Math.floor(Math.random()*6)+1);
    document.getElementById("roll2").value = Math.floor(Math.random()*6)+1;
    diceTotal.push(document.getElementById("roll2").value = Math.floor(Math.random()*6)+1);
    document.getElementById("roll3").value = Math.floor(Math.random()*6)+1;
    diceTotal.push(document.getElementById("roll3").value = Math.floor(Math.random()*6)+1);
    document.getElementById("roll4").value = Math.floor(Math.random()*6)+1;
    diceTotal.push(document.getElementById("roll4").value = Math.floor(Math.random()*6)+1);
    document.getElementById("roll5").value = Math.floor(Math.random()*6)+1;
    diceTotal.push(document.getElementById("roll5").value = Math.floor(Math.random()*6)+1);
    document.getElementById("total").value = diceTotal[0]+diceTotal[1]+diceTotal[2]+diceTotal[3]+diceTotal[4]+diceTotal[5];

}

function rolldice2(){
    document.getElementById("rolla").value = Math.floor(Math.random()*6)+1;
    diceTotal2.push(document.getElementById("rolla").value = Math.floor(Math.random()*6)+1);
    document.getElementById("roll1a").value = Math.floor(Math.random()*6)+1;
    diceTotal2.push(document.getElementById("roll1a").value = Math.floor(Math.random()*6)+1);
    document.getElementById("roll2a").value = Math.floor(Math.random()*6)+1;
    diceTotal2.push(document.getElementById("roll2a").value = Math.floor(Math.random()*6)+1);
    document.getElementById("roll3a").value = Math.floor(Math.random()*6)+1;
    diceTotal2.push(document.getElementById("roll3a").value = Math.floor(Math.random()*6)+1);
    document.getElementById("roll4a").value = Math.floor(Math.random()*6)+1;
    diceTotal2.push(document.getElementById("roll4a").value = Math.floor(Math.random()*6)+1);
    document.getElementById("roll5a").value = Math.floor(Math.random()*6)+1;
    diceTotal2.push(document.getElementById("roll5a").value = Math.floor(Math.random()*6)+1);
    document.getElementById("totala").value = diceTotal2[0]+diceTotal2[1]+diceTotal2[2]+diceTotal2[3]+diceTotal2[4]+diceTotal2[5];
   win();
}


function win(){
    var play1=Math.abs(21-(diceTotal[0]+diceTotal[1]+diceTotal[2]+diceTotal[3]+diceTotal[4]+diceTotal[5]));
    var play2=Math.abs(21-(diceTotal2[0]+diceTotal2[1]+diceTotal2[2]+diceTotal2[3]+diceTotal2[4]+diceTotal2[5]));

    
    if(play1<play2){
        document.getElementById("winner").value =("Player 1 wins!");
        diceTotal = [];
        diceTotal2 = []
    }else if(play1>play2){
        document.getElementById("winner").value =("Player 2 wins!");
        diceTotal = [];
        diceTotal2 = []
    }else {
        document.getElementById("winner").value =("Tie!");
        diceTotal = [];
        diceTotal2 = []
    }
}