const {createApp} = Vue;

const app = createApp({
    data() {
        return {
            products:[],
            cartOpen: true,
            cart: [],
        }
    },
    methods: {
        addToCart(product){
            const prodIndex = this.cart.findIndex(prod => prod.name === product.name);
            if(prodIndex >= 0){
                this.cart[prodIndex].quantity += 1;
            }else{
                this.cart.push(product);
            }
            product.stock -= 1;
        }
    }, 
    computed: {
        total(){
            return this.cart.reduce((prev, curr) => {
                const prevPrice = prev.price || prev;
                const prevQuantity = prev.quantity || 1;
                const newTotal = prevPrice * prevQuantity + curr.price * curr.quantity;
                return newTotal;
            }, 0);
        }
    },
    async created() {
        const api = 'https://my-json-server.typicode.com/iosamuel/demo/products';
        try{
            const response = await fetch(api);
            const data = await response.json();
            this.products = data;
        } catch (error) {
            console.error(`Error: ${error}, msg: fallo la comunicacion con la api`)
        }
    }
});
