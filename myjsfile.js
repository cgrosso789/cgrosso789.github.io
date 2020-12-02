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