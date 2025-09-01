const app = Vue.createApp({
    // data, functions
    // template: "<h2>NIce VUe JS!</h2>"
    data() {
        return {
            call: "call me ehe",
            output: 0,
            
            toggle: true
        }
    },

    methods: {
        addClick() {
            this.output += 1;
        },
        subClick() {
            this.output -= 1;
        },

        btnToggle() {
            this.toggle = this.toggle === 'true' ? 'false' : 'true';
        }

    }
    
})

app.mount('#app')