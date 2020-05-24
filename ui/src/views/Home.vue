<template>
  <div class="home d-flex">
    <div class="hero section d-flex">
      <h1
        class="display-4 blue-grey--text text--darken-3 align-self-center text-right"
      >
        Manage your customer.
      </h1>
    </div>
    <div class="content d-flex flex-column justify-center section">
      <p class="display-1">Built API using nestjs</p>
      <ul class="mb-4">
        <li>Register new customer</li>
        <li>View customer detail</li>
        <li>Update customer detail</li>
        <li>Delete customer detail</li>
      </ul>

      <p class="display-1">Build frontend SPA using vuejs</p>
      <ul>
        <li>User should be able to register new customer</li>
        <li>User should be able to see listing of registered customers</li>
        <li>
          User should be able to click on any registered customer and view the
          customer detail
        </li>
        <li>User should be able to delete registered customer.</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
};
</script>

<style lang="scss" scoped>
.home {
  height: 100%;
}

.hero {
  background: #78909c;
}

.content {
}

.section {
  width: 50%;
  padding: 32px;
}
</style>
