const app = Vue.createApp({

    data() {
        return {
            url: "https://github.com/gmarxdev",
            toggle: true,
            books: [
                { title: 'The Habit Loop', author: 'Charles Duhigg', img: 'assets/my-photo.jpg', isFav: false },
                { title: 'The Habit Loop', author: 'Charles Duhigg', img: 'assets/my-photo.jpg', isFav: false },
                { title: 'NO EXCUSES!', author: 'Tracey', img: 'assets/my-photo.jpg', isFav: false },
            ],
            liToggle: true
        }
    },
    methods: {
        btnToggle() {
            this.toggle = !this.toggle;
        },
        li_Toggle(book) {
            book.isFav = !book.isFav;
        }
    }

})

app.mount('#app');