<template>
  <div class="main-content">
    <ProductList />
  </div>
</template>

<script>
import ProductList from '../components/ProductList';
export default {
  name: 'Products',
  components: {
    ProductList,
  }
}
</script>