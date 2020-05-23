<template>
  <div class="container mx-auto mt-16">
    <h1 class="mb-6 text-4xl">Customers</h1>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import axios from 'axios';

export default Vue.extend({
  data() {
    return {
      customers: []
    };
  },
  mounted() {
    axios.get('http://localhost:3003/customer').then(res => {
      this.customers = res.data;
    });
  }
});
</script>
