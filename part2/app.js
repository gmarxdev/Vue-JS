const app = Vue.createApp({

    data() {
        return {
            url: "https://github.com/gmarxdev",
            toggle: true,
            books: [
                { title: "The Habit Loop", author: "Charles Duhigg" },
                { title: "The Habit Loop", author: "Charles Duhigg" },
                { title: "The Habit Loop", author: "Charles Duhigg" },
            ]

        }
    },
    methods: {
        btnToggle() {
            this.toggle = !this.toggle;
        }
    }

})
app.mount('#app');