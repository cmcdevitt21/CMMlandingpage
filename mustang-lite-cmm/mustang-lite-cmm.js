/*
    Author:  Colby McDevitt
    Class:   Web & Distributed Programming 
    Project: Mustang Lite v1
    Session: su18-cpsc-24700-lt1
    Description: This is the starting point for the mustang project
*/
var contactURLArray = [];
var contactArray = [];
var loadingContact = 0;

function initApplication() {
    console.log('Mustang Lite - Starting!'); 
}

function loadJSON() {
    var indexRequest1 = new XMLHttpRequest();
    indexRequest1.open('GET', 'https://cpsc-24700-su18-lt1.azurewebsites.net/ldw6txsjg4.json');
    indexRequest1.onload = function() {
        console.log(indexRequest1.responseText);
        document.getElementById("id-01").innerHTML = indexRequest1.responseText;
    }
    indexRequest1.send();

    var indexRequest2 = new XMLHttpRequest();
    indexRequest2.open('GET', 'https://z-mustang-data.azurewebsites.net/ldw6txsjg6.json');
    indexRequest2.onload = function() {
        console.log(indexRequest2.responseText);
        document.getElementById("id-02").innerHTML = indexRequest2.responseText;
    }
    indexRequest2.send();

    var indexRequest3 = new XMLHttpRequest();
    indexRequest3.open('GET', 'https://cpsc-24700-su18-lt1.azurewebsites.net/r9us3zzb88.json');
    indexRequest3.onload = function() {
        console.log(indexRequest3.responseText);
        document.getElementById("id-03").innerHTML = indexRequest3.responseText;
    }
    indexRequest3.send();

    var indexRequest4 = new XMLHttpRequest();
    indexRequest4.open('GET', 'https://danazurewebsitetest.azurewebsites.net/mustang-v1/json/e66kx3qpit.json');
    indexRequest4.onload = function() {
        console.log(indexRequest4.responseText);
        var response = JSON.parse(indexRequest4.responseText);
        console.log(response);
        document.getElementById("id-04").innerHTML = indexRequest4.responseText;
    }
    indexRequest4.send();

    var indexRequest5 = new XMLHttpRequest();
    indexRequest5.open('GET', 'https://danazurewebsitetest.azurewebsites.net/mustang-v1/json/3wmk9fj1ot.json');
    indexRequest5.onload = function() {
        console.log(indexRequest5.responseText);
        document.getElementById("id-05").innerHTML = indexRequest5.responseText;
    }
    indexRequest5.send();   

    var indexRequest6 = new XMLHttpRequest();
    indexRequest6.open('GET', 'https://cpsc-24700-brett-scott.azurewebsites.net/Week_5/contact_json/96lz8wh5wz.json');
    indexRequest6.onload = function() {
        console.log(indexRequest5.responseText);
        document.getElementById("id-06").innerHTML = indexRequest6.responseText;
    }
    indexRequest6.send();

    var indexRequest7 = new XMLHttpRequest();
    indexRequest7.open('GET', 'https://cpsc-24700-brett-scott.azurewebsites.net/Week_5/contact_json/wgwbd15eq5.json');
    indexRequest7.onload = function() {
        console.log(indexRequest5.responseText);
        document.getElementById("id-07").innerHTML = indexRequest7.responseText;
    }
    indexRequest7.send();

    var indexRequest8 = new XMLHttpRequest();
    indexRequest8.open('GET', 'https://bg-mustang-v1.azurewebsites.net/qw3q6m7i3p.json');
    indexRequest8.onload = function() {
        console.log(indexRequest5.responseText);
        document.getElementById("id-08").innerHTML = indexRequest8.responseText;
    }
    indexRequest8.send();

    var indexRequest9 = new XMLHttpRequest();
    indexRequest9.open('GET', 'https://bg-mustang-v1.azurewebsites.net/9t3l6f7a9c.json');
    indexRequest9.onload = function() {
        console.log(indexRequest5.responseText);
        document.getElementById("id-09").innerHTML = indexRequest9.responseText;
    }
    indexRequest9.send();

    var indexRequest10 = new XMLHttpRequest();
    indexRequest10.open('GET', 'https://mustangcristianv1.azurewebsites.net/L9wWi7ahfg.json');
    indexRequest10.onload = function() {
        console.log(indexRequest5.responseText);
        document.getElementById("id-010").innerHTML = indexRequest10.responseText;
    }
    indexRequest10.send();

    var indexRequest11 = new XMLHttpRequest();
    indexRequest11.open('GET', 'https://mustangcristianv1.azurewebsites.net/GyOkN3m0R2.json');
    indexRequest11.onload = function() {
        console.log(indexRequest5.responseText);
        document.getElementById("id-011").innerHTML = indexRequest11responseText;
    }
    indexRequest11.send();

    var indexRequest12 = new XMLHttpRequest();
    indexRequest12.open('GET', 'https://bg-mustang-v1.azurewebsites.net/9t3l6f7a9c.json');
    indexRequest12.onload = function() {
        console.log(indexRequest5.responseText);
        document.getElementById("id-012").innerHTML = indexRequest12.responseText;
    }
    indexRequest12.send();

    var indexRequest13 = new XMLHttpRequest();
    indexRequest13.open('GET', 'https://jbaptiste2018.azurewebsites.net/n2ck1g5efu.json');
    indexRequest13.onload = function() {
        console.log(indexRequest5.responseText);
        document.getElementById("id-013").innerHTML = indexRequest13.responseText;
    }
    indexRequest13.send();

    var indexRequest14 = new XMLHttpRequest();
    indexRequest14.open('GET', 'https://jbaptiste2018.azurewebsites.net/z84gu1qbyh.json');
    indexRequest14.onload = function() {
        console.log(indexRequest5.responseText);
        document.getElementById("id-014").innerHTML = indexRequest14.responseText;
    }
    indexRequest14.send();

    var indexRequest15 = new XMLHttpRequest();
    indexRequest15.open('GET', 'https://catalog-brc-app.azurewebsites.net/8nd2t4tzbc.json');
    indexRequest15.onload = function() {
        console.log(indexRequest5.responseText);
        document.getElementById("id-015").innerHTML = indexRequest15.responseText;
    }
    indexRequest15.send();

    var indexRequest16 = new XMLHttpRequest();
    indexRequest16.open('GET', 'hhttps://catalog-brc-app.azurewebsites.net/6ihcfr0k4k.json');
    indexRequest16.onload = function() {
        console.log(indexRequest5.responseText);
        document.getElementById("id-016").innerHTML = indexRequest16.responseText;
    }
    indexRequest16.send();

    var indexRequest17 = new XMLHttpRequest();
    indexRequest17.open('GET', 'https://cameronraynie.azurewebsites.net/A5-Mustang/jx8kdoqs8g.json');
    indexRequest17.onload = function() {
        console.log(indexRequest5.responseText);
        document.getElementById("id-017").innerHTML = indexRequest17.responseText;
    }
    indexRequest17.send();

    var indexRequest18 = new XMLHttpRequest();
    indexRequest18.open('GET', 'https://cameronraynie.azurewebsites.net/A5-Mustang/c4aulv2m7b.json');
    indexRequest18.onload = function() {
        console.log(indexRequest5.responseText);
        document.getElementById("id-018").innerHTML = indexRequest18.responseText;
    }
    indexRequest18.send();

    var indexRequest19 = new XMLHttpRequest();
    indexRequest19.open('GET', 'https://garzamustangdata.azurewebsites.net/xzq33e1avx.json');
    indexRequest19.onload = function() {
        console.log(indexRequest5.responseText);
        document.getElementById("id-019").innerHTML = indexRequest19.responseText;
    }
    indexRequest19.send();

    var indexRequest20 = new XMLHttpRequest();
    indexRequest20.open('GET', 'https://garzamustangdata.azurewebsites.net/w8fiwf9io7.json');
    indexRequest20.onload = function() {
        console.log(indexRequest5.responseText);
        document.getElementById("id-020").innerHTML = indexRequest20.responseText;
    }
    indexRequest20.send();

    var indexRequest21 = new XMLHttpRequest();
    indexRequest21.open('GET', 'https://mustang-index.azurewebsites.net/x6395172069.json');
    indexRequest21.onload = function() {
        console.log(indexRequest5.responseText);
        document.getElementById("id-021").innerHTML = indexRequest21.responseText;
    }
    indexRequest21.send();

    var indexRequest22 = new XMLHttpRequest();
    indexRequest22.open('GET', 'https://mustang-index.azurewebsites.net/y2882154268.json');
    indexRequest22.onload = function() {
        console.log(indexRequest5.responseText);
        document.getElementById("id-022").innerHTML = indexRequest22.responseText;
    }
    indexRequest22.send();

    var indexRequest23 = new XMLHttpRequest();
    indexRequest23.open('GET', 'https://mustang-data-mr.azurewebsites.net/xuctuvsxeh.json');
    indexRequest23.onload = function() {
        console.log(indexRequest5.responseText);
        document.getElementById("id-023").innerHTML = indexRequest23.responseText;
    }
    indexRequest23.send();

    var indexRequest24 = new XMLHttpRequest();
    indexRequest24.open('GET', 'https://mustang-data-mr.azurewebsites.net/dr6bm8jvbp.json');
    indexRequest24.onload = function() {
        console.log(indexRequest5.responseText);
        document.getElementById("id-024").innerHTML = indexRequest24.responseText;
    }
    indexRequest24.send();

    var indexRequest25 = new XMLHttpRequest();
    indexRequest25.open('GET', 'https://cmmustang-data.azurewebsites.net/f982n38tfz.json');
    indexRequest25.onload = function() {
        console.log(indexRequest5.responseText);
        document.getElementById("id-025").innerHTML = indexRequest25.responseText;
    }
    indexRequest25.send();

    var indexRequest26 = new XMLHttpRequest();
    indexRequest26.open('GET', 'https://cmmustang-data.azurewebsites.net/x8eoo2012n.json');
    indexRequest26.onload = function() {
        console.log(indexRequest5.responseText);
        document.getElementById("id-026").innerHTML = indexRequest26.responseText;
    }
    indexRequest26.send();
}


//These fuctions are the same as the example code you gave us, I will try to work on a 
//different soution to the multi-thread thsi up coming week
function loadIndex() {
    // Load the Mustang index file.
    var indexRequest = new XMLHttpRequest();
    indexRequest.open('GET', 'https://mustang-index.azurewebsites.net/index.json');
    indexRequest.onload = function() {
        console.log("Index JSON:" + indexRequest.responseText);
        document.getElementById("indexID").innerHTML = indexRequest.responseText;
        contactIndex = JSON.parse(indexRequest.responseText);
        // Bugbug: Need to clear contactURLArray.
        for (i=0; i<contactIndex.length; i++) {
            contactURLArray.push(contactIndex[i].ContactURL);
        }
        console.log("ContactURLArray: " + JSON.stringify(contactURLArray));
    }
    indexRequest.send();
}

function logContacts() {
    console.log(contactArray);
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

        loadingContact++;
        if (contactURLArray.length > loadingContact) {
            loadNextContact(contactURLArray[loadingContact]);
        }
    }

    contactRequest.send();
}

