const app = Vue.createApp({
    // data, functions
    // template: "<h2>NIce VUe JS!</h2>"
    data() {
        return {
            call: "call me ehe",
            output: 0,
            
            toggle: true,

            x: 0,
            y: 0,
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
            this.toggle = !this.toggle;
        },

        handleEvent(e, data) {
            console.log(e, e.type)
            if (data) {
                console.log(data)
            }
        },

        handleMousemove(e) {
            this.x = e.offsetX
            this.y = e.offsetY
        }

    }
    
})

app.mount('#app')