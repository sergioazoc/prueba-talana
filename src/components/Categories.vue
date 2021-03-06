<template>
  <div>
    <ul class="nav flex-column">
      <li class="nav-item">
        <a class="nav-link" href="#">Categorías</a>
      </li>
      <li class="nav-item" v-for="category in categories" :key="category.id">
        <a class="nav-link" href="#">{{category.name}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex"

export default {
  name: 'Categories',
  components: {
    
  },
  created(){
    this.getCategories()
  },
  methods: {
    ...mapActions(["getCategories"])
  },
  computed: {
    ...mapState(['categories', 'error'])
  }
}
</script>

<style scoped>
  
</style>