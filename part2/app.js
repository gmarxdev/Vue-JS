const app = Vue.createApp({

    data() {
        return {
            url: "https://github.com/gmarxdev",
            toggle: true,
            books: [
                { title: 'The Habit Loop', author: 'Charles Duhigg', img: 'assets/my-photo.jpg', isFav: true },
                { title: 'The Habit Loop', author: 'Charles Duhigg', img: 'assets/my-photo.jpg', isFav: false },
                { title: 'NO EXCUSES!', author: 'Tracey', img: 'assets/my-photo.jpg', isFav: true },
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