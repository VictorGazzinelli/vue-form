<template>
  <div class="container">
    <div class="boxItens">
      <p>
        <b>Produto: </b>{{ product.name }}<br />
        <b>Preço: </b>R${{ product.price }}<br />
        <b>Categoria: </b>{{ product.category }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductItem",
  props: {
    product: Object,
  },
};
</script>

<style scoped>
.boxItens {
  border: solid #222222 2px;
  padding: 12px;
}
</style>