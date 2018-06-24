/*
    Author:  Colby McDEvitt
    Class:   Web & Distributed Programming 
    Project: Mustang v2 
    Session: su18-cpsc-24700-lt1
    Description: This adds the feature for a user to add their contact to the mustang json array
    Date: June 20, 2018
*/

var contactURLArray = [];
var contactArray = [];
var loadingContact = 0;
var currentContactIndex = 0; 

// Functions
function viewCurrentContact() {
    currentContact = contactArray[currentContactIndex];
    console.log(currentContact);
    document.getElementById("nameID").value = currentContact.preferredName;   
    document.getElementById("emailID").value = currentContact.email;   
    document.getElementById("cityID").value = currentContact.city;   
    document.getElementById("stateID").value = currentContact.state;
    document.getElementById("zipID").value = currentContact.zip;  

    // Todo: Add additional fields.
    document.getElementById("statusID").innerHTML = "Status: Viewing contact " + (currentContactIndex+1) + " of " + contactArray.length;
}

function previous() {
     if (currentContactIndex > 0) {
        currentContactIndex--;
        document.getElementById("previous").style.visibility='visible';
        document.getElementById("next").style.visibility='visible';
    }else{
        document.getElementById("previous").disable=true;
        document.getElementById("previous").style.visibility='hidden';
    }
    currentContact = contactArray[currentContactIndex];
    viewCurrentContact();

    // Todo: Disable previous button when currentContactIndex equal to 0.
    //***Feature was added**** 
    // Todo: Save changed items to contacts array and resort array.
}

function next() {
    if (currentContactIndex < (contactArray.length-1)) {
        currentContactIndex++;
        document.getElementById("next").style.visibility='visible';
        document.getElementById("previous").style.visibility='visible';
    }else if(currentContactIndex = (contactArray.length-1)){
        document.getElementById("next").disable=true;
        document.getElementById("next").style.visibility='hidden';
    }
    currentContact = contactArray[currentContactIndex];
    viewCurrentContact();
    
    // Todo: Disable next button when there is no next item.
    //***Feature was added****
    // Todo: Save changed items to contacts array and resort array.
}

function innew() {
    console.log('add()');
    document.getElementById("newform").style.visibility='visible';

    // shows new form table
}
function hidenew() {
    console.log('caneled');
    document.getElementById("newform").style.visibility='hidden';

    // shows new form table
}
function indelete() {
    console.log('delete()');
    document.getElementById("newdel").style.visibility='visible';

    // shows delete table
}

function add() {
    console.log('add()');
    var fName = document.getElementById("FirstnameID").value;
    var lName = document.getElementById("LastnameID").value;
    var pName = document.getElementById("prefnameID").value;
    var email = document.getElementById("nemailID").value;
    var phone = document.getElementById("phoneID").value;
    var zipd = document.getElementById("nzipID").value;
    var city = document.getElementById("ncityID").value;
    var state = document.getElementById("nstateID").value;
    var hobby = document.getElementById("hobbyID").value;


    
    var newContact = {"firstName":fName,"lastNames":lName,"preferredName":pName,"email":email,"phoneNumber":phone,"city":city,"state":state,"zip":zipd,"lat":"","lng":"","favoriteHobby":hobby};
    contactArray.push(newContact);
    sortArr();
    document.getElementById("newform").style.visibility='hidden';
    
    // Todo: Implement add functionality by inserting new element into array.
    // **feature added***
}

function remove() {
    console.log('remove()');
    document.getElementById("newdel").style.visibility='hidden';
    var tName = document.getElementById("FirstnamedelID").value;
    var yName = document.getElementById("LastnamedelID").value;
    var count = -1;

    for(var i=0;i<contactArray.length;i++){
        var f = contactArray[i].firstName;
        var p = contactArray[i].preferredName;
        var copyContacts = [];

        var t = f.localeCompare(tName);
        var d = p.localeCompare(tName);
        
        if(t == 0 || d == 0){
            count = i;
            for(var j=0;j<count;j++){
            copyContacts.push(contactArray[j]);
            }
            if(count < contactArray.length-1){
            for(var k=count+1;k<contactArray.length;k++){
                    copyContacts.push(contactArray[k]);
                    } 
            }else{}
            contactArray=copyContacts;
        }else{}
    }
    sortArr();
    
    // Todo: Implement delete functionality by deleting element from array.
    //****feature added****
}



function zipBlurFunction() {
    getCity();
    getPlace();
}

function keyPressed() {
    console.log('keyPressed()');

    // This type of function should be useful in search as it implements keyPressed.
    //*****did not use this method*****
}
function getCity(){
    //this function was added to make the zip onblur fill the IL city,
    //it's not the most elegant solution, but I went with it just t make it functional
    var zipIL =["60102","Algonquin",
    "60103","Bartlett",
    "60104","Bellwood",
    "60105" , "Bensenville",
    "60106", "Bensenville",
    "60107" , "Streamwood",
    "60108" , "Bloomingdale",
    "60109" , "Burlington",
    "60110" , "Carpentersville",
    "60111" , "Clare",
    "60112" , "Cortland",
    "60113" , "Creston",
    "60115" , "Dekalb",
    "60116" , "Carol Stream",
    "60117" , "Bloomingdale",
    "60118" , "Dundee",
    "60119" , "Elburn",
    "60120" , "Elgin",
    "60121" , "Elgin",
    "60122" , "Elgin",
    "60123" , "Elgin",
    "60125" , "Carol Stream",
    "60126" , "Elmhurst",
    "60128" , "Carol Stream",
    "60129" , "Esmond",
    "60130" , "Forest Park",
    "60131" , "Franklin Park",
    "60132" , "Carol Stream",
    "60133" , "Hanover Park",
    "60134" , "Geneva",
    "60135" , "Genoa",
    "60136" , "Gilberts",
    "60137" , "Glen Ellyn",
    "60138" , "Glen Ellyn",
    "60139" , "Glendale Heights",
    "60140" , "Hampshire",
    "60141" , "Hines",
    "60142" , "Huntley",
    "60143" , "Itasca",
    "60144" , "Kaneville",
    "60145" , "Kingston",
    "60146" , "Kirkland",
    "60147" , "Lafox",
    "60148" , "Lombard",
    "60150" , "Malta",
    "60151" , "Maple Park",
    "60152" , "Marengo",
    "60153" , "Maywood",
    "60154" , "Westchester",
    "60155" , "Broadview",
    "60156" , "Lake In The Hills",
    "60157" , "Medinah",
    "60159" , "Schaumburg",
    "60160" , "Melrose Park",
    "60161" , "Melrose Park",
    "60162" , "Hillside",
    "60163" , "Berkeley",
    "60164" , "Melrose Park",
    "60165" , "Stone Park",
    "60168" , "Schaumburg",
    "60170" , "Plato Center",
    "60171" , "River Grove",
    "60172" , "Roselle",
    "60173" , "Schaumburg",
    "60174" , "Saint Charles",
    "60175" , "Saint Charles",
    "60176" , "Schiller Park",
    "60177" , "South Elgin",
    "60178" , "Sycamore",
    "60179" , "Hoffman Estates",
    "60180" , "Union",
    "60181" , "Villa Park",
    "60182" , "Virgil",
    "60183" , "Wasco",
    "60184" , "Wayne",
    "60185" , "West Chicago",
    "60186" , "West Chicago",
    "60187" , "Wheaton",
    "60188" , "Carol Stream",
    "60189" , "Wheaton",
    "60190" , "Winfield",
    "60191" , "Wood Dale",
    "60192" , "Schaumburg",
    "60193" , "Schaumburg",
    "60194" , "Schaumburg",
    "60195" ,"Schaumburg",
    "60196" , "Schaumburg",
    "60197", "Carol Stream",
    "60199" ,"Carol Stream"
    ]
    var zip = document.getElementById("nzipID").value
    console.log("zip:"+zip);
   
    console.log("function getPlace(zip) { ... }");

    for(var w=0; w<zipIL.length; w++){
        
        if (zip.localeCompare(zipIL[w])==0){
            if (document.getElementById("ncityID").value == "")
                document.getElementById("ncityID").value = zipIL[w+1];
                if (document.getElementById("nstateID").value == "")
                document.getElementById("nstateID").value = "IL";
        }else{
            ;
        }
    }

}
function getPlace() {
    //left this in even though the "getCity()" method is used 
    var zip = document.getElementById("nzipID").value
    console.log("zip:"+zip);
   
    console.log("function getPlace(zip) { ... }");
    var xhr = new XMLHttpRequest();

    // Register the embedded handler function
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var result = xhr.responseText;
            console.log("result:"+result);
            var place = result.split(', ');
            if (document.getElementById("ncityID").value == "")
                document.getElementById("ncityID").value = place[0];
            if (document.getElementById("nstateID").value == "")
                document.getElementById("nstateID").value = place[1];
        }
    }
    xhr.open("GET", "getCityState.php?zip=" + zip);
    xhr.send(null);
}

function initApplication() {
    console.log('Mustang v2 Lite - Starting!'); 
    loadIndex();
}

function loadIndex() {
    // Load the Mustang index file.
    var indexRequest = new XMLHttpRequest();
    indexRequest.open('GET', 'https://mustang-index.azurewebsites.net/index.json');
    indexRequest.onload = function() {
        console.log("Index JSON:" + indexRequest.responseText);
        document.getElementById("indexID").innerHTML = indexRequest.responseText;
        contactIndex = JSON.parse(indexRequest.responseText);
        for (i=0; i<contactIndex.length; i++) {
            contactURLArray.push(contactIndex[i].ContactURL);
        }
        console.log("ContactURLArray: " + JSON.stringify(contactURLArray));
        loadContacts();
    }
    indexRequest.send();
}

function loadContacts() {
    // Clear the current contactArray.
    contactArray.length = 0;
    loadingContact = 0;

    // Note that W3C documentation and my experimentation indicate that each XMLHttpRequest callback function must be a 
    // unique instance of a function. A better implmentation would have had an array of callback functions instead of a 
    // recursive call to load
    if (contactURLArray.length > loadingContact) {
        loadNextContact(contactURLArray[loadingContact]);
    }
}

function loadNextContact(URL) {
    console.log("URL: " + URL);
    contactRequest = new XMLHttpRequest();
    contactRequest.open('GET', URL);
    contactRequest.onload = function() {
        console.log(contactRequest.responseText);
        var contact;
        contact = JSON.parse(contactRequest.responseText);
        console.log("Contact: " + contact.firstName);
        contactArray.push(contact);

        document.getElementById("contactsID").innerHTML = JSON.stringify(contactArray);

        document.getElementById("statusID").innerHTML = "Status: Loading " + contact.firstName + " " + contact.lastName;

        loadingContact++;
        if (contactURLArray.length > loadingContact) {
            loadNextContact(contactURLArray[loadingContact]);
        }
        else {
            document.getElementById("statusID").innerHTML = "Status: Contacts Loaded (" + contactURLArray.length + ")";
            viewCurrentContact()
            console.log(contactArray);

            //Todo: Sort contacts array.
            //***Feature is in sortArr() method *****
            sortArr();

        }
    }

    contactRequest.send();
}

function sortArr(){
    for (var y =0; y<contactArray.length-1; y++){

        if (contactArray[y+1].firstName.localeCompare(contactArray[y].firstName)<0){
            var t =contactArray[y+1];
            var s = contactArray[y];
            contactArray[y]=t;
            contactArray[y+1]=s;
            sortArr();
        }else{
            ;}
    }
    document.getElementById("contactsID").innerHTML = JSON.stringify(contactArray);

}
