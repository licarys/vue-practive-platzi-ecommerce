app.component('product', {
    template: /* vue-html*/ `
        <section class="product">
            <div class="product__thumbnails">
                <div class="thumb" 
                    v-for="(images, index) in product.images"
                    :key="images.thumbnail"
                    :class="{ active: activeImage === index}" 
                    :style="{backgroundImage: 'url(' + images.thumbnail + ')'}"
                    @click="activeImage = index"></div>
            </div>
            <div class="product__image">
                <img :src="product.images[activeImage].image" :alt="product.name">
            </div>
        </section>
        <section class="description">
            <h4>{{ product.name }} {{product.stock === 0 ? '😥' : '😀' }}</h4>
            <badge :product="product"></badge>
            <p class="description__status" v-if="product.stock === 3"> {{product.stock}} units left</p>
            <p class="description__status" v-else-if="product.stock === 2">Product close to sold out </p>
            <p class="description__status" v-else-if="product.stock === 1">Last unit available </p>
            <p class="description__status" v-else-if="product.stock === 0">Out of stock '😥'</p>
            <p class="description__price" :style="{color: priceColor}"> $ {{ new Intl.NumberFormat('en-EN').format(product.price) }}</p>
            <p class="product__description">{{ product.description }}</p>
            <div class="discount">
                <span>Discount Code:</span>
                <input type="text" placeholder="Enter your code" @keyup.enter="applyDiscount($event)">
            </div>
            <button :disabled="product.stock === 0" @click="sendToCart">Add to the cart</button>
        </section>
    `,
    props: ['product'],
    emits: ['sendtocart'],
    setup(props, context){
        const productState = reactive({
            activeImage: 0,
            priceColor: 'rgb(104, 104, 209)'
        });

        const discountCodes = ref(['PLATZI', 'PLATZI20', 'LICARY']);

        function sendToCart(){
            context.emit('sendtocart', props.product);
        }

        function applyDiscount(event){
            const codeEntered = event.target.value.toUpperCase();
            const discountCodeIndex = discountCodes.value.indexOf(codeEntered);

            if(discountCodeIndex > -1){
                props.product.price *= 50/ 100;
                discountCodes.value.splice(discountCodeIndex, 1);
            }
        }

        watch(() => productState.activeImage, (stock) => {
            if(stock < 1){
                productState.priceColor = 'rgb(188 30 67)';
            }
        })

        return {
            ...toRefs(productState),
            
            applyDiscount,
            sendToCart
        }
    }
})