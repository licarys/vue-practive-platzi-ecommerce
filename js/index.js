const {createApp} = Vue;

const app = createApp({
    data() {
        return {
            product: {
                name: 'Camera',
                price: 450000,
                stock: 0,
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
            },
            Images: [
                {
                    image: './images/camara.png',
                    thumbnail: './imaeges/camara-thumb.jpg'
                },
                {
                    image: './images/camara-2.png',
                    thumbnail: './imaeges/camara-2-thumb.jpg'
                }
            ]
        }
    }
});

app.mount('#app');