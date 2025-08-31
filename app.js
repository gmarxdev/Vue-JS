const app = Vue.createApp({
    // data, functions
    // template: "<h2>NIce VUe JS!</h2>"
    data() {
        return {
            call: "call me ehe",
            x: 0,
            output: 0
        }
    },

    methods: {
        addClick() {
            this.x += 1;
            this.output = this.x;
        },
        subClick() {
            this.x -= 1;
            this.output = this.x;
        }
    }
    
})

app.mount('#app')