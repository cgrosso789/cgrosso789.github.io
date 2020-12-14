function startUp() {
    new Vue({
        el: '#showDate',
        data: function() {
            return {
                fatherTime: '',
                access: '',
                calendar: '',
                message: '',
                isClicked: false
            }
        },
        methods: {
            getDate: function() {
                console.log("getDate called");
                this.calendar = Date();
                this.message = 'Time to Get a Job!';
                this.fatherTime = 'Images/fatherTimeImg.png';
                this.access = 'cartoon image of Father Time';
                this.isClicked = true;
            }
        }
    });
}

window.addEventListener("load", startUp);
