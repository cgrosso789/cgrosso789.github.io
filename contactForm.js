app.component('contact-form', {
    template:
    `<form class="contact-form" @submit.prevent="onSubmit">
        <h3>Contact me:</h3>

        <label for="name">Your name:</label>
        <input id="name" v-model="name">

        <label for="message" v-model="message">Your message:</label>
        <textarea id="message"></textarea>
        <input> class="button" type="submit" value="Submit">
    </form>`,
    data() {
        return {
            name: '',
            message: ''
        };
    },
    methods: {
        onSubmit() {
            let userMessage = {
                name: this.name,
                message: this.message
            };
            this.$emit('message-submitted', userMessage);
            this.name = '';
            this.message = '';
        }
    }
});