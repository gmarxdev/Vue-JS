const app = Vue.createApp({

    data() {
        return {
            toggle: true,
            Book: [
                { title: "The Habit Loop", author: "Charles Duhigg" }
            ]

        }
    },
    method: {
        btnToggle() {
            this.toggle = !this.toggle;
        }
    }

})
app.mount('#app');