<template>
  <NavbarComponent />
  <div id="container">
    <q-form @submit="onSubmit" id="orders_form" class="q-gutter-md">
      <q-input filled v-model="form.name" label="Your name *" lazy-rules />

      <q-input
        filled
        type="number"
        v-model="form.contact"
        label="Your Contact *"
        lazy-rules
      />
      <q-input
        filled
        type="text"
        v-model="form.address"
        label="Your Address *"
        lazy-rules
      />

      <div>
        <q-btn label="Submit" type="submit" color="primary" />
      </div>
    </q-form>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import NavbarComponent from "../components/HomePage/Navbar.vue";
import { useCartStore } from "../store.js";
import { collection, addDoc, db } from "../firebase.js";
const cartStore = useCartStore();
const form = reactive({
  name: "",
  contact: null,
  address: "",
  order: cartStore.cart,
  total: cartStore.cartTotal,
});

const onSubmit = async () => {
  const docRef = await addDoc(collection(db, "orders"), form);
  console.log("Document written with id: ", docRef.id);
};
</script>

<style scoped>
#container {
  margin-top: 10%;
}

#orders_form {
  width: 50%;
}
</style>
