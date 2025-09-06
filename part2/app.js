const app = Vue.createApp({

    data() {
        return {
            url: "https://github.com/gmarxdev",
            toggle: true,
            books: [
                { title: 'The Habit Loop', author: 'Charles Duhigg', img: 'assets/my-photo.jpg' },
                { title: 'The Habit Loop', author: 'Charles Duhigg', img: 'assets/my-photo.jpg' },
                { title: 'The Habit Loop', author: 'Charles Duhigg', img: 'assets/my-photo.jpg' },
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