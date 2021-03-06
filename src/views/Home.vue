<template>
  <div class="container">
    <Products />
  </div>
</template>

<script>
// @ is an alias to /src
import Products from "../components/Products"
import { mapActions, mapState } from "vuex"

export default {
  name: 'Home',
  components: {
    Products,
  },
  created(){
    this.getProducts()
  },
  methods: {
    ...mapActions(["getProducts"])
  },
  computed: {
    ...mapState(['products'])
  }
}
</script>
