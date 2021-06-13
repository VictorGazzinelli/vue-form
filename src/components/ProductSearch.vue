<template>
  <div>
    <input
      type="text"
      placeholder="Buscar"
      v-model="search"
      v-on:keyup="handleSearch"
    />
  </div>
</template>

<script>
export default {
  name: "ProductSearch",
  components: {},
  props: {
    onSearch: Function,
  },
  data() {
    return {
      search: "",
    };
  },
  methods: {
    handleSearch() {
      this.onSearch(this.search);
    },
  },
};
</script>

<style scoped>
input {
  padding: 12px;
  margin-bottom: 16px;
  border-radius: 8px;
}
</style>