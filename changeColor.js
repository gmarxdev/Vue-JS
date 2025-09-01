const app = Vue.createApp({


    data() {
        return {
            btnText: 'Click Me'
        }
    },
    methods: {
        changeColor() {
            this.btnText = this.btnText === 'Click Me' ? 'Click Me Again' : 'Again Click!';
        }
    }
    
})

app.mount('#changeColor')