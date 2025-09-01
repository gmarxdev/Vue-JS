const app = Vue.createApp({


    data() {
        return {
            btnText: 'Click Me'
        }
    },
    methods: {
        btnCLick() {
            this.btnText = this.btnText === 'Click Me' ? 'Click Me Again' : 'Again Click!';
        }
    }
    
})

app.mount('#changeColor')