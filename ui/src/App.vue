<template>
  <v-app>
    <v-app-bar app color="blue-grey darken-1" dark flat>
      <v-app-bar-nav-icon :hidden="$vuetify.breakpoint.lgAndUp" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <div class="tw-flex tw-items-center">
        <router-link to="/" class="brand-link">
          <h1 class="brand">Customer Information Management</h1>
        </router-link>
      </div>

      <v-spacer></v-spacer>

      <div class="tw-hidden lg:tw-block">
        <v-btn text to="/">
          <span class="mr-2">Home</span>
        </v-btn>
        <v-btn text to="customer">
          <span class="mr-2">Customer</span>
        </v-btn>
      </div>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      app
      color="blue-grey"
      dark
      :hidden="$vuetify.breakpoint.lgAndUp"
    >
      <v-list nav>
        <v-list-item two-line>
          <v-list-item-content>
            <v-list-item-title>Customer Management</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list-item to="/">
          <v-list-item-icon>
            <v-icon>{{mdiHome}}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Home</v-list-item-title>
        </v-list-item>

        <v-list-item to="/customer">
          <v-list-item-icon>
            <v-icon>{{mdiAccount}}</v-icon>
          </v-list-item-icon>

          <v-list-item-title>Customer</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-content class="bg-light-grey">
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import { mdiHome, mdiAccount } from "@mdi/js";

export default {
  name: "App",

  data: () => ({
    drawer: false,
    mdiHome,
    mdiAccount
  })
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
