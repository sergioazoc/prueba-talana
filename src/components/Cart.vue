<template>
  <div>
    <p>Resumen de Compra</p>
    <table class="table">
      <tr v-for="(item, index) in productsOnCart" :key="index">
        <td>
          {{item.name}} <br>
          {{item.price}}
        </td>
        <td>{{item.quantity}}</td>
        <td>Sub total: {{item.price * item.quantity}}</td>
      </tr>
    </table>
    <p>Total: {{cartTotal || 0}}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(['productsOnCart', 'cartTotal'])
  },
}
</script>

<style>

</style>