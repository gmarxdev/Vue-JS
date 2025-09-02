const app = Vue.createApp({

    data() {
        return {
            Book: [
                { title: "The Habit Loop", author: "Charles Duhigg" }
            ],

            toggle: true,
        }
    },
    method: {
        btnToggle() {
            this.toggle = !this.toggle
        }
    }

})
app.mount('#app');