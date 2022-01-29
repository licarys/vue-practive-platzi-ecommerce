const { createApp, ref, reactive, toRefs, watch, computed } = Vue;

const app = createApp({
    setup(){
        const products = ref([]);
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

        /* Another way to use Computed props */
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

        const api = 'https://my-json-server.typicode.com/iosamuel/demo/products';
        fetch(api)
            .then(res=> res.json())
            .then(data => {
                products.value = data;
            });

        return {
            ...toRefs(cartState),

            products,

            addToCart
        }
    }
});
