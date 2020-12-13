function startUp() {

    new Vue ({
        el: '#picRefresh',
        data: {
            photoSrc: 'Images/BabyPossumM.JPG', //initialize 1st pic
            photoSrc2: 'Images/BabyPossumM.JPG',    //initialize 2nd pic
            pictureNum: 1,  //index of BabyPossum pic
            randomNum: 1,   //what the heck; initialize this to 1, as well
            pictures: ["Images/AmanitaMushroomM.JPG",
            "Images/BabyPossumM.JPG",
            "Images/BabyWildTurkeyM.JPG",
            "Images/BabyWoodChuckM.JPG",
            "Images/BearTrackM.JPG",
            "Images/BeautifulEggsM.JPG",
            "Images/BoatersM.JPG",
            "Images/CanoeBirdsM.JPG",
            "Images/CritterSkullM.JPG",
            "Images/DeadCedarWaxWingM.JPG",
            "Images/FoxTraxM.JPG",
            "Images/GardenSpiderM.JPG",
            "Images/GarterSnakeM.JPG",
            "Images/GravidSnapperM.JPG",
            "Images/HenAndChicksM.JPG",
            "Images/IrridescentBeetleM.JPG",
            "Images/MooseTraxM.JPG",
            "Images/MorelMushroomM.JPG",
            "Images/NestCowbirdM.JPG",
            "Images/OwlAtDuskM.JPG",
            "Images/RaspberriesM.JPG",
            "Images/RedEftM.JPG",
            "Images/RusticLeavesM.JPG",
            "Images/SquirrelTraxM.JPG",
            "Images/TubersM.JPG",
            "Images/WildTurkeysM.JPG",
            "Images/WilsonWaterSnakeM.JPG",
            "Images/WoodTurtleM.JPG",
             ]
        },
        created: function() {
           setInterval(this.getNewPic, 2000);
        },
        methods: {
            getNewPic: function() {

                this.randomNum = getRandomInt(this.pictures.length);
                this.photoSrc = this.photoSrc2;
                this.photoSrc2 = this.pictures[this.randomNum];

                //for debug:
                console.log("Random Number index: " + this.randomNum);
            }
        }
    });
}

window.addEventListener("load", startUp);

//from: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// called by getNewPic to randomly display slide show images
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
