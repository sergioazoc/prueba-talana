<template>
  <div class="px-3 py-1 d-flex justify-content-between align-items-center">
    <router-link to="/" class="navbar-brand">Mascotalana</router-link>
   
    <div class="d-flex flex-row align-items-center">
      <Finder/>
      <router-link to="/cart">
        <img class="img-fluid ml-2" src="../assets/img/cart.svg" alt="carro de compras">
        <span class="px-3 py-1 ml-2 rounded-pill bg-primary text-light">{{totalQuantity}}</span>
      </router-link>
    </div>

  </div>
</template>

<script>
import Finder from "../components/Finder";
import { mapGetters } from "vuex";

export default {
  components: {
    Finder
  },
  computed: {
    ...mapGetters(['totalQuantity'])
  }
}
</script>

<style scoped>
img{
  width: 30px;
  height: 30px;
}

</style>