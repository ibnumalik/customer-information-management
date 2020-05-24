<template>
  <v-dialog v-model="sdialog" persistent max-width="600px">
    <v-card>
      <v-card-title>
        {{ customer.name }}
      </v-card-title>
      <v-card-text>
        <dl>
          <dt class="font-weight-bold">Email</dt>
          <dd class="mb-2">{{ customer.email }}</dd>

          <dt class="font-weight-bold">Phone Number</dt>
          <dd class="mb-2">{{ customer.phone }}</dd>

          <dt class="font-weight-bold">Address</dt>
          <dd class="mb-2">{{ customer.address }}</dd>
        </dl>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn text @click="close()">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    sdialog: {
      type: Boolean,
      default: false,
    },
    customer: {
      type: Object,
    },
  },

  methods: {
    close() {
      this.$emit('close');
    },
  },
};
</script>
