const {createApp} = Vue;

const app = createApp({
    data() {
        return {
            product: {
                name: 'Camera',
                price: 450000,
                stock: 5,
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
                images: [
                    {
                        image: './images/camara.jpg',
                        thumbnail: './images/camara-thumb.jpg'
                    },
                    {
                        image: './images/camara-2.jpg',
                        thumbnail: './images/camara-2-thumb.jpg'
                    }
                ],
                test: './images/camara.jpg',
                new: true,
                offer: true
            },
            activeImage: 1,
            cartOpen: true,
            cart: [
                {
                    name: 'Camera',
                    price: 450000,
                    stock: 5,
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
                    images: [
                        {
                            image: './images/camara.jpg',
                            thumbnail: './images/camara-thumb.jpg'
                        },
                        {
                            image: './images/camara-2.jpg',
                            thumbnail: './images/camara-2-thumb.jpg'
                        }
                    ],
                    test: './images/camara.jpg',
                    new: true,
                    offer: true
                },
                {
                    name: 'Camera 22',
                    price: 780000,
                    stock: 5,
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
                    images: [
                        {
                            image: './images/camara.jpg',
                            thumbnail: './images/camara-thumb.jpg'
                        },
                        {
                            image: './images/camara-2.jpg',
                            thumbnail: './images/camara-2-thumb.jpg'
                        }
                    ],
                    test: './images/camara.jpg',
                    new: true,
                    offer: true
                }
            ]
        }
    },
});

app.mount('#app');