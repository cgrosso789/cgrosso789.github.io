window.addEventListener("load", playIt);

function playIt() {
    document.getElementById("seeYouAgain").play();
}

function showYoung(manPic) {
    let manPicCaption=document.getElementById("RudyCaption");
    manPic.src="Images/YoungRudyBoat.JPG";
    manPic.setAttribute("class", "medSmall");
    manPic.width="480";
    manPic.height="640";
    manPicCaption.innerHTML = "Photo taken by family friend and boat owner, Saint Lawrence River, Canada";
}

function showOlder(boyPic) {
    let boyPicCaption=document.getElementById("RudyCaption");
    boyPic.src="Images/CapnRudy.JPG";
    boyPic.setAttribute("class", "huge");
    boyPic.width="2288";
    boyPic.height="1712";
    boyPicCaption.innerHTML = "Photo by Katie Grosso";
}

function processTrivia() {  //process name and check boxes
    //help for setAttribute from: 
    //https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_element_setattribute1
    //submit suggestions from:
    //https://html.form.guide/html-form/form-action-using-javascript-function/
    let firstName = document.getElementById("firstName");
    let userGreeting = document.getElementById("greeting"); //div in which to put response text to name entry
    if (firstName.value.length < 2) {
        userGreeting.setAttribute("class", "badEntry");
        userGreeting.textContent = "First name must be at least 2 characters long";
    } else {
        userGreeting.setAttribute("class", "goodEntry");
        userGreeting.textContent = "Hello, " + firstName.value + "!";
    }
    
    let tootToot = document.getElementsByClassName("instr");    //"array" of user instrument choices
    let bandResult = document.getElementById("bandResponse");    //div in which to put response text to instr choices
    if ((tootToot[1].checked === true) || (tootToot[2].checked === true)) { //if either tuba or flute are checked
        bandResult.setAttribute("class", "badEntry");
        bandResult.textContent = "At least one of your choices is wrong.";
    } else { //see if clarinet and/or sax is checked
        //if (clarinet & not sax) OR (sax & not clarinet) 
        if (((tootToot[0].checked === true) && (tootToot[3].checked === false)) || ((tootToot[3].checked === true) && (tootToot[0].checked === false))) { 
            bandResult.setAttribute("class", "okayEntry");
            bandResult.textContent = "You are partially correct.";
        } else {
            if ((tootToot[0].checked === false) && (tootToot[3].checked === false)) {
                bandResult.setAttribute("class", "badEntry");
                bandResult.textContent = "You've left this one blank, which is wrong. Just sayin\'";
            } else {
                bandResult.setAttribute("class", "goodEntry");
                bandResult.textContent = "You are absolutely right!!  Congratulations!";
            }
        }
    }
}

function processSport(sport) {
    let sportsResult = document.getElementById("sportsResponse");   //div in which to put response text to sports choice

    switch(sport) {
        case "softball":
            sportsResult.setAttribute("class", "badEntry");
            sportsResult.textContent = "Nope.  Worst softball player EVER in my work league.";
            break;
        case "swimming":
            sportsResult.setAttribute("class", "goodEntry");
            sportsResult.textContent = "Yeah, you got it!!";
          break;
        case "fieldHockey":
            sportsResult.setAttribute("class", "badEntry");
            sportsResult.textContent = "Nope.  What\'s field hockey?";
            break;
        case "tennis":
            sportsResult.setAttribute("class", "badEntry");
            sportsResult.textContent = "Nope.  Can\'t even hit the ball.";
      }
}

function processActivity(activity) {
    let otherResult = document.getElementById("otherResponse"); //div in which to put response text to activity choice

    switch(activity) {
        case "blarney":
            otherResult.setAttribute("class", "okayEntry");
            otherResult.textContent = "I\'m horrified to admit I DID do this. Not the complete answer, though!";
            break;
        case "windsurf":
            otherResult.setAttribute("class", "okayEntry");
            otherResult.textContent = "I did this for a few years, and it was glorious!  But keep guessing!";
          break;
        case "hitchhiking":
            otherResult.setAttribute("class", "okayEntry");
            otherResult.textContent = "Yep. In England. Picked up by roadies for The Who once. Keep guessing.";
            break;
        case "meridian":
            otherResult.setAttribute("class", "okayEntry");
            otherResult.textContent = "Yep. In Greenwich, England. Keep guessing.";
            break;
        case "dolphin":
            otherResult.setAttribute("class", "okayEntry");
            otherResult.textContent = "Yes, in Turks & Caicos. An IMAX starring this dolphin was made years later! Keep guessing!";
            break;
        case "allOfIt":
            otherResult.setAttribute("class", "goodEntry");
            otherResult.textContent = "Yes!!! YOUR list may be more impressive, but I HAVE done all of the above!!";
            break;
        case "noneOfIt":
            otherResult.setAttribute("class", "badEntry");
            otherResult.textContent = "Wrong!!  How boring do you think I look?!";
  }
}

function getAdvice() {
    //Help for the code in this function came from the CS601 online module 5, as well as
    //https://www.w3schools.com/xml/ajax_intro.asp
    //(This is essentially the same piece of code I used in Assignment 5.)
    let httpRequest = new XMLHttpRequest();
    if (!httpRequest) {
        alert('Cannot create an XMLHTTP instance');
        return false;
    }
    httpRequest.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            let adviceText = this.responseText;
            getAdviceData(adviceText);
        }
    };
    httpRequest.open("GET", "https://api.adviceslip.com/advice", true);
    httpRequest.send();

}
function getAdviceData(adviceString) {

    //Extract the advice text from the response:
    let startIdx = adviceString.indexOf("advice") + 10; // index of start of advice string
    adviceString = adviceString.slice(startIdx);    //chop off everything before the advice
    let endIdx = adviceString.indexOf("\"");    //find the index of the end quote
    document.getElementById("putAdviceHere").textContent = adviceString.slice(0, endIdx);
}