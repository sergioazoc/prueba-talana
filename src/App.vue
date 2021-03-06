<template>
  <div id="app">
    <Navbar/>
    <div class="d-flex mt-3">
      <Categories />
      <router-view/>
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import Categories from "./components/Categories";

export default {
  components: {
    Navbar,
    Categories
  }
}
</script>

<style>

</style>
