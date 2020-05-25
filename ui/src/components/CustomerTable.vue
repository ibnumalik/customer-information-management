<template>
  <v-data-table
    :headers="headers"
    :items="customers"
    sort-by="calories"
    class="elevation-1"
    @click:row="show"
  >
    <template v-slot:item.actions="{ item }">
      <v-icon
        small
        class="mr-2 hover-scale-up hover-blue-icon"
        @click.stop="editItem(item)"
        title="Edit customer"
      >
        {{ mdiPencil }}
      </v-icon>
      <v-icon
        small
        @click.stop="deleteItem(item)"
        title="Delete customer"
        class="hover-scale-up hover-red-icon"
      >
        {{ mdiDelete }}
      </v-icon>
    </template>
    <template v-slot:no-data>
      <p class="my-6">There is no customer.</p>
    </template>
  </v-data-table>
</template>

<script>
import axios from 'axios';
import { SETTINGS } from '../settings';
import { mdiDelete, mdiPencil } from '@mdi/js';

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
    mdiDelete,
    mdiPencil,
  }),

  methods: {
    editItem(item) {
      const index = this.customers.indexOf(item);

      this.$emit('open-customer-form', { index, customer: item });
    },

    deleteItem(item) {
      const index = this.customers.indexOf(item);
      /* Optimistic delete. */
      const confirmDelete = confirm(
        'Are you sure you want to delete this item?'
      );

      if (confirmDelete) {
        this.customers.splice(index, 1);

        const url = `${SETTINGS.CUSTOMER_API}/${item.id}/delete`;
        axios.delete(url).then((res) => {
          /* Undo optimistic delete if something goes wrong. */
          if (res.status !== 200) {
            this.customers.splice(index, 0, item);
          }
        });
      }
    },

    show(item) {
      this.$emit('show-customer', item);
    },
  },
};
</script>

<style lang="scss" scoped>
.hover-scale-up {
  &:hover {
    transform: scale(1.2);
  }
}

.hover-blue-icon:hover {
  color: #2196f3;
}

.hover-red-icon:hover {
  color: #f44336;
}
</style>
