<template>
  <div>
    <form @submit.prevent="onFormSubmit">
      <button>
        <router-link to="/products">ir para produtos</router-link>
      </button>
      <h1>Produtos</h1>
      <input type="text" placeholder="nome" v-model="name" required />
      <input type="number" placeholder="preco" v-model="price" required />
      <input type="text" placeholder="categoria" v-model="category" required />
      <input type="submit" value="cadastrar" />
    </form>
  </div>
</template>

<script>
export default {
  name: "ProductForm",
  data() {
    return {
      name: "",
      price: "",
      category: "",
    };
  },
  props: {
    onAddProduct: Function,
  },
  methods: {
    onFormSubmit() {
      const product = {
        name: this.name,
        price: this.price,
        category: this.category,
      };
      this.$store.dispatch("addProduct", product);
      this.name = "";
      this.price = "";
      this.category = "";
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  border: solid #222222 2px;
  border-radius: 8px;
  padding: 40px;
}

form h1 {
 text-transform: capitalize;
 color: #222222;
}

input {
  margin: 12px;
  line-height: 20px;
  padding: 10px;
  font-size: larger;
  border-radius: 5px;
  border: solid #26abff 2px;
}

button,
input[type="submit"] {
  background-color: #26abff;
  color: #FFFFFF;
  border-radius: 8px;
  border-style: none;
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