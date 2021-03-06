<template>
  <div class="">
    <div class="card">
      <img v-if="product.photo" :src="product.photo" class="card-img-top img-fluid" alt="...">
      <img v-else class="card-img-top img-fluid" src="../assets/img/product-placeholder.png" />
      <div class="card-body">
        <h5 class="card-title">{{product.name}}</h5>
        <p class="card-text">${{product.price}}</p>
        <button @click="addToCart(product)" class="btn btn-primary btn-sm">Agregar al carro</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "product",
  props: {
    product: Object,
  },
  methods: {
    ...mapActions(['addToCart']),
  },
  computed(){
  }
}
</script>

<style scoped>
  .card{
    max-width: 200px;
  }
</style>