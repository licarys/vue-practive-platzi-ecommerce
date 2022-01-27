const { createApp, ref } = Vue;

const app = createApp({
    setup(){
        const product = ref({
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
            quantity: 1,
            new: true,
            offer: true
        });

        const activeImage = ref(0);

        const cartOpen = ref(false);

        const cart = ref([]);

        setTimeout( () => {
            activeImage.value = 1
        }, 2000);

        return {
            product, 
            activeImage, 
            cartOpen, 
            cart
        }
    }
});

app.mount('#app');