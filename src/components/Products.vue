<template>
  <div class="container">
    <h2>{{products[0].category.name}}</h2>
    <div v-if="products" class="d-flex justify-content-between flex-wrap">

        <Product 
          :product="product"  
          v-for="product in products" 
          :key="product.id" 
        />
    </div>

    <Loader v-else />

    <div v-if="error">
      <p>No se pudo conectar con la base de datos.</p>
    </div>
    
  </div>
</template>

<script>
import Product from "./Product"
import Loader from "./Loader"
import { mapActions, mapState } from "vuex"

export default {
  name: 'Products',
  created(){
    this.getProducts()
  },
  methods: {
    ...mapActions(["getProducts"])
  },
  computed: {
    ...mapState(['products', 'error'])
  },
  components: {
    Product,
    Loader
  }
}
</script>

<style>

</style>