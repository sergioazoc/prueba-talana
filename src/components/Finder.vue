<template>
  <form @submit.prevent="" class="form-inline">
    <input v-model="q" class="form-control rounded-pill" type="search" placeholder="Buscar Producto...">
  </form>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  data(){
    return {
      q: ""
    }
  },
  computed: mapState({
    products: state => state.products,
    filterProducts (state) {
      return state.products.filter(product => product.name.toLowerCase().includes(this.q.toLowerCase()))
    }
  }),
  methods: {
    findProduct(){
      this.find(this.q)
    },
    ...mapActions(['find'])
  }
}
</script>

<style>

</style>