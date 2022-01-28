const { createApp, ref, reactive, toRefs } = Vue;

const app = createApp({
    setup(){
        const productState = reactive({
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
                quantity: 1,
                new: true,
                offer: true
            },
            activeImage: 0
        });

        const cartState = reactive({
            cartOpen: false,
            cart: []
        });

        const discountCodes = ref(['PLATZI', 'PLATZI20', 'LICARY']);

        function addToCart(){
            const prodIndex = cartState.cart.findIndex(prod => prod.name === productState.product.name);
            if(prodIndex >= 0){
                cartState.cart[prodIndex].quantity += 1;
            }else{
                cartState.cart.push(productState.product);
            }
            productState.product.stock -= 1;
        }

        function applyDiscount(event){
            const codeEntered = event.target.value.toUpperCase();
            const discountCodeIndex = discountCodes.value.indexOf(codeEntered);

            if(discountCodeIndex > -1){
                productState.product.price *= 50/ 100;
                discountCodes.value.splice(discountCodeIndex, 1);
            }
        }

        setTimeout( () => {
            activeImage.value = 1
        }, 2000);

        return {
            ...toRefs(productState),
            ...toRefs(cartState),

            applyDiscount,
            addToCart
        }
    }
});

app.mount('#app');