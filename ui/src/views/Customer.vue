<template>
  <div class="container">
    <div class="align-center d-flex header justify-space-between my-8">
      <h1 class="display-2">Customers</h1>

      <v-btn color="primary" @click="formDialog = !formDialog">
        Register New Customer
      </v-btn>
    </div>

    <div class="content">
      <CustomerTable
        :customers="customers"
        @open-customer-form="openCustomerForm"
        @show-customer="show"
      />
    </div>

    <CustomerForm
      v-if="formDialog"
      :dialog="formDialog"
      :customer="customer"
      @close="close()"
      @update-customers="updateCustomers"
    />

    <CustomerDetail
      v-if="showDialog"
      :sdialog="showDialog"
      :customer="customer"
      @close="close()"
    />
  </div>
</template>

<script>
import axios from 'axios';
import CustomerTable from '../components/CustomerTable.vue';
import CustomerForm from '../components/CustomerForm.vue';
import CustomerDetail from '../components/CustomerDetail.vue';

export default {
  data: () => ({
    formDialog: false,
    showDialog: false,
    customer: null,
    customers: [],
  }),

  components: {
    CustomerTable,
    CustomerForm,
    CustomerDetail,
  },

  methods: {
    openCustomerForm(item) {
      this.customer = item.customer;
      this.formDialog = true;
    },

    close() {
      this.formDialog = false;
      this.showDialog = false;
      this.customer = null;
    },

    show(customer) {
      this.customer = customer;
      this.showDialog = true;
    },

    updateCustomers(item) {
      this.customers = [...this.customers, item];
    },
  },

  mounted() {
    axios.get('http://localhost:3003/customer').then((res) => {
      this.customers = res.data;
    });
  },
};
</script>

<style lang="scss" scoped>
.container {
  padding: 0 16px;
}
</style>
