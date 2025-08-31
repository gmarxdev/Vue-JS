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
        handleClick() {
            this.x += 1
            if (this.x == 0) {
                return {
                    output: 1
                }
            } else {
                return {
                    output: this.x
                }
            }
        }
    }
    
})

app.mount('#app')