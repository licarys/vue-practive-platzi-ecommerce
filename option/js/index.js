const {createApp} = Vue;

const app = createApp({
    data() {
        return {
            products:[
                {
                    name: 'Camer 1a',
                    price: 450,
                    stock: 3,
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
                    quantity: 1,
                    new: true,
                    offer: true
                },
                {
                    name: 'Camera 2',
                    price: 550,
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
                    quantity: 1,
                    new: true,
                    offer: true
                },
                {
                    name: 'Camera 3',
                    price: 680,
                    stock: 12,
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
                    quantity: 1,
                    new: true,
                    offer: true
                }
            ],
            cartOpen: true,
            cart: [],
        }
    },
    methods: {}
});
