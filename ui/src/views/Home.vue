<template>
  <div class="home lg:tw-flex">
    <div
      class="hero tw-py-8 tw-px-4 tw-mb-8 lg:tw-mb-0 lg:tw-w-1/2 tw-flex tw-items-center lg:tw-px-12"
    >
      <h1
        class="blue-grey--text text--darken-3 tw-text-3xl lg:tw-text-7xl tw-font-light tw-leading-none lg:tw-text-right tw-tracking-tight"
      >
        Manage your customer.
      </h1>
    </div>
    <div class="tw-px-4 lg:tw-px-12 tw-flex tw-justify-center tw-flex-col">
      <p class="tw-text-2xl lg:tw-text-4xl">Built API using nestjs</p>
      <ul class="mb-4 tw-list-disc">
        <li>Register new customer</li>
        <li>View customer detail</li>
        <li>Update customer detail</li>
        <li>Delete customer detail</li>
      </ul>

      <p class="tw-text-2xl lg:tw-text-4xl">Build frontend SPA using vuejs</p>
      <ul class="tw-list-disc">
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
</style>
