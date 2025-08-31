const app = Vue.createApp({
    // data, functions
    // template: "<h2>NIce VUe JS!</h2>"
    data() {
        return {
            call: "call me ehe",
            x: 0
        }
    },

    handleClick() {
        this.x += 1
        return {
            output: this.x
        }
    }
    
})

app.mount('#app')