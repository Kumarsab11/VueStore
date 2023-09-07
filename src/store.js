import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useCartStore = defineStore("cart", () => {
  const cart = ref([]);
  const cartCount = computed(() => cart.value.length);

  const cartTotal = computed(() =>
    cart.value.reduce((total, product) => {
      return Number(total) + Number(product.price);
    }, 0)
  );

  const addtoCart = (product) => {
    cart.value.push(product);
    console.log("cart.value:", cart.value);
  };

  const removefromCart = (id) => {
    cart.value = cart.value.filter((el) => {
      return el.id !== id;
    });
  };

  return { cartCount, addtoCart, cart, removefromCart, cartTotal };
});
