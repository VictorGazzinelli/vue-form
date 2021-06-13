import ProductForm from "./components/ProductForm";
import Products from "./pages/Products";

export const routes = [
  { path: '/', component: ProductForm },
  { path: '/products', component: Products }
];