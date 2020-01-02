Vue.component('product', {
  template: `
    <div class="product">
    <div class="product-image">
      <img :src="image" >
    </div>

    <div class="product-info">
      <h1>{{ title }}</h1>
      <p v-if="inStock">In Stock</p>
      <p v-else :class="{ outOfStock: !inStock }">Out of Stock</p>

      <ul>
        <li v-for="detail in details">{{ detail }}</li>
      </ul>

      <div class="color-box" 
          v-for="variant in variants" 
          :key="variant.variantId" 
          :style="{ backgroundColor: variant.variantColor }" 
          @mouseover="updateProduct(variant.variantImage)"
      >
      </div>

    </div>

    <button v-on:click="addToCart" 
        :disabled="!inStock" 
        :class="{ disabledButton: !inStock }"
    >
    Add to cart
    </button>

    <div class="cart">
      <p>Cart({{ cart }})</p>
    </div>

    </div>
  `,
  data() {
    return {
      product: 'Socks',
      brand: 'Vue Mastery',
      image: './assets/vmSocks-green.jpg',
      inStock: true,
      details: ["80% cotton", "20% polyester", "Gender-neutral"],
      variants: [
        {
          variantId: 2234,
          variantColor: 'green',
          variantImage: './assets/vmSocks-green.jpg'
        },
        {
          variantId: 2235,
          variantColor: 'blue',
          variantImage: './assets/vmSocks-blue.jpg'
        }
      ],
      cart: 0
    }
  },
  methods: {
    addToCart() {
      this.cart += 1
    },
    updateProduct(variantImage) {
      this.image = variantImage
    }
  },
  computed: {
    title() {
      return this.brand + ' ' + this.product
    }
  }
})

var app = new Vue({
  el: '#app'
})