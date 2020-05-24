<template>
  <div class="container">
    <div class="align-center d-flex header justify-space-between my-8">
      <h1 class="display-2">Customers</h1>

      <v-btn color="primary" @click="dialog = !dialog">
        Register New Customer
      </v-btn>
    </div>

    <div class="content">
      <CustomerTable
        :customers="customers"
        @open-customer-form="openCustomerForm"
      />
    </div>

    <CustomerForm
      v-if="dialog"
      :dialog="dialog"
      :customer="customer"
      @close="closeForm()"
    />
  </div>
</template>

<script>
import axios from 'axios';
import CustomerTable from '../components/CustomerTable.vue';
import CustomerForm from '../components/CustomerForm.vue';

export default {
  data: () => ({
    customers: [],
    dialog: false,
    customer: null,
  }),

  components: {
    CustomerTable,
    CustomerForm,
  },

  methods: {
    openCustomerForm(item) {
      this.customer = item.customer;
      this.dialog = true;
    },

    closeForm() {
      this.dialog = false;
      this.customer = null;
    },
  },

  mounted() {
    axios
      .get('http://localhost:3003/customer')
      .then((res) => (this.customers = res.data));
  },
};
</script>

<style lang="scss" scoped>
.container {
  padding: 0 16px;
}
</style>
