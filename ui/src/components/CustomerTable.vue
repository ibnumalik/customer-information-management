<template>
  <v-data-table
    :headers="headers"
    :items="customers"
    sort-by="calories"
    class="elevation-1"
  >
    <template v-slot:item.actions="{ item }">
      <v-icon small class="mr-2" @click="editItem(item)" title="Edit customer">
        mdi-pencil
      </v-icon>
      <v-icon small @click="deleteItem(item)" title="Delete customer">
        mdi-delete
      </v-icon>
    </template>
    <template v-slot:no-data>
      <p>There is no customer.</p>
    </template>
  </v-data-table>
</template>

<script>
import axios from 'axios';
import { SETTINGS } from '../settings';

export default {
  props: {
    customers: Array,
  },

  data: () => ({
    headers: [
      { text: 'Name', align: 'start', value: 'name' },
      { text: 'Email', value: 'email' },
      { text: 'Phone Number', value: 'phone' },
      { text: 'Address', value: 'address' },
      { text: 'Actions', value: 'actions', sortable: false },
    ],
    editedIndex: -1,
  }),

  methods: {
    editItem(item) {
      const index = this.customers.indexOf(item);

      this.$emit('open-customer-form', { index, customer: item });
    },

    deleteItem(item) {
      const index = this.customers.indexOf(item);
      /* Optimistic delete. */
      confirm('Are you sure you want to delete this item?') &&
        this.customers.splice(index, 1);

      const url = `${SETTINGS.CUSTOMER_API}/${item.id}/delete`;
      axios.delete(url).then((res) => {
        /* Undo optimistic delete if something goes wrong. */
        if (res.status !== 200) {
          this.customers.splice(index, 0, item);
        }
      });
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.desserts[this.editedIndex], this.editedItem);
      } else {
        this.desserts.push(this.editedItem);
      }
      this.close();
    },
  },
};
</script>
