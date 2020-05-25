<template>
  <v-app>
    <v-app-bar app color="blue-grey darken-1" dark flat>
      <div class="d-flex align-center">
        <router-link to="/" class="brand-link">
          <h1 class="brand">Customer Information Management</h1>
        </router-link>
      </div>

      <v-spacer></v-spacer>

      <div class="tw-hidden lg:tw-block">
        <v-btn text to="/"> <span class="mr-2">Home</span> </v-btn>
        <v-btn text to="customer"> <span class="mr-2">Customer</span> </v-btn>
      </div>
    </v-app-bar>

    <v-content class="bg-light-grey">
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>

<style lang="scss" scoped>
.brand {
  font-size: 16px;
  font-weight: 400;
}

.brand-link {
  color: #ffffff;
  text-decoration: none;
}

.bg-light-grey {
  background: #f9f9f9;
}
</style>

<style src="./assets/tailwind.css">
