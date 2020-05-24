<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">{{ formAction }} Customer</span>
        </v-card-title>
        <v-card-text>
          <v-form @submit.prevent="createOrEdit" v-model="valid" ref="form">
            <v-container>
              <v-row>
                <!-- Name -->
                <v-col cols="12">
                  <v-text-field
                    label="Name"
                    required
                    outlined
                    v-model="item.name"
                    :rules="nameRules"
                  ></v-text-field>
                </v-col>

                <!-- Email -->
                <v-col cols="12">
                  <v-text-field
                    label="Email"
                    required
                    outlined
                    v-model="item.email"
                    :rules="emailRules"
                  ></v-text-field>
                </v-col>

                <!-- Phone Number -->
                <v-col cols="12">
                  <v-text-field
                    label="Phone Number"
                    required
                    outlined
                    v-model="item.phone"
                    :rules="phoneRules"
                  ></v-text-field>
                </v-col>

                <!-- Address -->
                <v-col cols="12">
                  <v-text-field
                    label="Address"
                    required
                    outlined
                    v-model="item.address"
                    :rules="addressRules"
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
          <v-btn
            color="blue darken-1"
            text
            @click="createOrEdit()"
            type="submit"
          >
            {{ actionTitle }}
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
    customer: {
      type: Object,
    },
  },

  data: () => ({
    valid: false,
    nameRules: [(v) => !!v || 'Name is required'],
    emailRules: [(v) => !!v || 'Email is required'],
    phoneRules: [(v) => !!v || 'Phone number is required'],
    addressRules: [(v) => !!v || 'Address is required'],
  }),

  computed: {
    item: {
      get() {
        return Object.assign({}, this.customer) || {};
      },
      set(nv) {
        return nv;
      },
    },

    formAction() {
      return this.customer ? 'Edit' : 'New';
    },

    actionTitle() {
      return this.customer ? 'Update' : 'Create';
    },
  },

  methods: {
    createOrEdit() {
      if (!this.valid) {
        return this.$refs.form.validate();
      }

      Axios.post(SETTINGS.CUSTOMER_API + '/create', this.item).then((res) => {
        if (res.status === 201) {
          this.$emit('close');
        }
      });
    },

    reset() {
      this.$refs.form.resetValidation();
    },
  },
};
</script>
