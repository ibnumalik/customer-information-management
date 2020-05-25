<template>
  <div class="container">
    <div class="lg:tw-flex tw-justify-between tw-mb-8 tw-mt-4">
      <h1 class="tw-text-3xl tw-mb-2">Customers</h1>

      <v-btn color="primary" @click="createNewCustomer()" :small="$vuetify.breakpoint.xs">
        Register New Customer
      </v-btn>
    </div>

    <div class="content tw-mb-8">
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
import { SETTINGS } from '../settings';

export default {
  data: () => ({
    formDialog: false,
    showDialog: false,
    customer: null,
    customers: [],
    editedIndex: -1,
  }),

  components: {
    CustomerTable,
    CustomerForm,
    CustomerDetail,
  },

  methods: {
    openCustomerForm(item) {
      this.customer = item.customer;
      this.editedIndex = item.index;
      this.formDialog = true;
    },

    createNewCustomer() {
      this.formDialog = true;
      this.editedIndex = -1;
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
      if (this.editedIndex > -1) {
        return Object.assign(this.customers[this.editedIndex], item);
      }

      this.customers = [...this.customers, item];
    },
  },

  mounted() {
    axios.get(SETTINGS.CUSTOMER_API).then((res) => (this.customers = res.data));
  },
};
</script>

<style lang="scss" scoped>
.container {
  padding: 0 16px;
}
</style>
