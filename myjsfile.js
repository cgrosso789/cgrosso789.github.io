/*window.onload = function() {
    // start the music:
    document.getElementById("seeYouAgain").play();
};*/
window.addEventListener("load", playIt);
document.getElementById("huge").addEventListener("mouseover", showYoung);
document.getElementById("huge").addEventListener("mouseout", showOlder);


function playIt() {
    document.getElementById("seeYouAgain").play();
}

function showYoung() {
    let manPic = document.getElementById("RudyManPic");
    let boyPic = "<img src='Images/YoungRudyBoat.JPG' class='medium' id='RudyBoyPic' alt='Upclose of boy driving power boat in the ocean.' width='640' height='420' />";
    manPic = boyPic;
}

function showOlder() {
    let boyPic = document.getElementById("RudyBoyPic");
    let manPic = "<img src='Images/CapnRudy.JPG' class='huge' id='RudyManPic' alt='Upclose of man driving power boat in the ocean.' width='2288' height='1712' />";
    boyPic = manPic;
}