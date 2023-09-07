<template>
  <div id="product">
    <div
      @click="showProduct(product.id)"
      v-for="product in products"
      id="individual"
    >
      <img :src="product.imageUrl" alt="" />
      <p>{{ product.title }}</p>
      <p>{{ product.price }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { db, collection, getDocs } from "../../firebase.js";

const products = ref([]);
const router = useRouter();
onMounted(async () => {
  const result = await getDocs(collection(db, "vuestore"));
  result.forEach((doc) => {
    let product = doc.data();
    product.id = doc.id;
    console.log("product:", product);
    products.value.push(product);
  });

  console.log("products:", products.value);
});

const showProduct = (id) => {
  console.log(id);

  router.push(`productsDetails/${id}`);
};
</script>

<style scoped>
#product {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-top: 3%;
  grid-gap: 3%;
}

#product img {
  width: 100%;
  height: 50%;
}
</style>
