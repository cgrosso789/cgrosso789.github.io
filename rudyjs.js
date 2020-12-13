function startUp() {
    playIt();
}
function playIt() {
    //include vueApp in function that is called onload,
    //or else it can't find the el: '#twinRu'
    new Vue({
        el: '#twinRu',
        data: {
            //initialize data for page load:
            rudyBoat: 'Images/CapnRudy.JPG',
            rudyClass: 'huge',
            rudyWidth: '2288',
            rudyHeight: '1712',
            photoCaption: 'Photo by Katie Grosso'
        },
        created: function () {
            this.showOlder();
        },
        methods: {
            showYoung: function() {
                this.rudyBoat = 'Images/YoungRudyBoat.JPG';
                this.rudyClass = 'medSmall';
                this.rudyWidth = '480';
                this.rudyHeight = '640';
                this.photoCaption = 'Photo taken by family friend and boat owner, Saint Lawrence River, Canada';
            },
            showOlder: function() {
                this.rudyBoat = 'Images/CapnRudy.JPG';
                this.rudyClass = 'huge';
                this.rudyWidth = '2288';
                this.rudyHeight = '1712';
                this.photoCaption = 'Photo taken by Katie Grosso';
            }
       }
    });
        //play music when rudy.html page loads:
        document.getElementById("seeYouAgain").play();
}

window.addEventListener("load", startUp);
