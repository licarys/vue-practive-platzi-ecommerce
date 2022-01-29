const { createApp, ref, reactive, toRefs, watch, computed } = Vue;

const app = createApp({
    setup(){
        const products = ref([
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
        ]);
        const cartState = reactive({
            cartOpen: false,
            cart: [],
            total: computed(() => {
                return cartState.total = cartState.cart.reduce((prev, curr) => {
                    const prevPrice = prev.price || prev;
                    const prevQuantity = prev.quantity || 1;
                    return prevPrice * prevQuantity + curr.price * curr.quantity;
                }, 0);
            })
        });

        // const total = computed(()=> {
        //     return cartState.total = cartState.cart.reduce((prev, curr) => {
        //         const prevPrice = prev.price || prev;
        //         const prevQuantity = prev.quantity || 1;
        //         return prevPrice * prevQuantity + curr.price * curr.quantity;
        //     }, 0);
        // });

        function addToCart(product){
            const prodIndex = cartState.cart.findIndex(prod => prod.name === product.name);
            if(prodIndex >= 0){
                cartState.cart[prodIndex].quantity += 1;
            }else{
                cartState.cart.push(product);
            }
            product.stock -= 1;
        }

        return {
            ...toRefs(cartState),

            products,

            addToCart
        }
    }
});
