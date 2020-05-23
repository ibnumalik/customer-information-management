<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">New Customer</span>
        </v-card-title>
        <v-card-text>
          <v-form @submit.prevent="create">
            <v-container>
              <v-row>
                <!-- Name -->
                <v-col cols="12">
                  <v-text-field
                    label="Name"
                    required
                    outlined
                    v-model="name"
                  ></v-text-field>
                </v-col>

                <!-- Email -->
                <v-col cols="12">
                  <v-text-field
                    label="Email"
                    required
                    outlined
                    v-model="email"
                  ></v-text-field>
                </v-col>

                <!-- Phone Number -->
                <v-col cols="12">
                  <v-text-field
                    label="Phone Number"
                    required
                    outlined
                    v-model="phone"
                  ></v-text-field>
                </v-col>

                <!-- Address -->
                <v-col cols="12">
                  <v-text-field
                    label="Address"
                    required
                    outlined
                    v-model="address"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="$emit('close')">
            Cancel
          </v-btn>
          <v-btn color="blue darken-1" text @click="create()" type="submit">
            Create
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import Axios from 'axios';
import { SETTINGS } from '../settings';
export default {
  props: {
    dialog: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    name: '',
    email: '',
    phone: '',
    address: '',
  }),

  methods: {
    create() {
      const customer = {
        name: this.name,
        email: this.email,
        phone: this.phone,
        address: this.address,
      };

      Axios.post(SETTINGS.CUSTOMER_API + '/create', customer).then((res) => {
        if (res.status === 201) {
          this.$emit('close');
        }
      });
    },
  },
};
</script>
