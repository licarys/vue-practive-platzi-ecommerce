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
                quantity: 1,
                new: true,
                offer: true
            },
            activeImage: 1,
            cartOpen: true,
            cart: [],
            discountCodes: ['PLATZI', 'PLATZI20', 'LICARY']
        }
    },
    methods: {
        applyDiscount(event){
            const codeEntered = event.target.value.toUpperCase();
            const discountCodeIndex = this.discountCodes.indexOf(codeEntered);

            if(discountCodeIndex > -1){
                this.product.price *= 50/ 100;
                this.discountCodes.splice(discountCodeIndex, 1);
            }
        },
        addToCart(){
            const prodIndex = this.cart.findIndex(prod => prod.name === this.product.name);
            if(prodIndex >= 0){
                this.cart[prodIndex].quantity += 1;
            }else{
                this.cart.push(this.product);
            }
            this.product.stock -= 1;
        }
    }
});

app.mount('#app');