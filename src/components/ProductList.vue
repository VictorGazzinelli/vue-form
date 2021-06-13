<template>
  <section>
    <ProductSearch :onSearch="handleSearchProducts"/>
    <div class="box">
      <div v-if="listedProducts.length > 0">
        <div v-for="(item, index) in listedProducts" :key="index">
          <ProductItem :product="item" />
        </div>
      </div>
      <div v-else>
        <div v-for="(item, index) in products" :key="index">
          <ProductItem :product="item" />
        </div>
        <p><b>Total de produtos :</b>{{ totalProducts }}</p>
      </div>
    </div>
    <button><router-link to="/">voltar</router-link></button>
  </section>
</template>

<script>
import ProductItem from "./ProductItem";
import ProductSearch from './ProductSearch';

export default {
  name: "ProductList",
  components: {
    ProductItem,
    ProductSearch,
  },
  props: {
  },
  data(){
    return{
      products: this.$store.getters.getProducts,
      listedProducts: [],
    }
  },
  methods: {
    handleSearchProducts(text){
      const results = this.products.filter((e) => e.name.startsWith(text));
      if(results.length > 0){
        this.listedProducts = results;
      } else {
        this.listedProducts = this.products;
      }
    }
  },
  computed: {
    totalProducts: function(){
      const numberOfProducts = this.$store.state.products.length;
      const numberOfListedProducts = this.listedProducts.length;
      const total = numberOfListedProducts > 0 ? numberOfListedProducts : numberOfProducts;
      return  ` ${total}`;
    },
  },
};
</script>


<style scoped>
section {
  display: flex;
  flex-direction: column;
  border: 2px solid #222222;
  padding: 8px;
  border-radius: 8px;
}

section p{
  font-weight: bold;
  align-items: center;
}

b {
  color: #26abff;
}

div {
  padding: 8px
}

button {
  background-color: #26abff;
  color: #FFFFFF;
  border-radius: 8px;
  border-style: none;
  padding: 8px;
}

a {
  text-decoration: none;
  color: #FFFFFF;
  font-weight: bold;
  font-size: larger;
  display: flex;
  justify-content: center;
}


</style>