const app2 = Vue.createApp({


    data() {
        return {
            btnText: 'Click Me'
        }
    },
    methods: {
        btnClick() {
            this.btnText = this.btnText === 'Click Me' ? 'Click Me Again' : 'Again Click!';
        }
    }
    
})

app2.mount('#changeText')