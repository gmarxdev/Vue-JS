const app = Vue.createApp({


    data() {
        return {
            btnColor: 'blue'
        }
    },
    methods: {
        changeColor() {
            this.btnColor = this.btnColor === 'blue' ? 'red' : 'blue';
        }
    }
    
})

app.mount('#changeColor')