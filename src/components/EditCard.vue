<template>
  <v-form @submit.prevent="$emit('submit', local)">
    <v-card max-width="344" class="mx-auto">
      <v-card-text>
        <v-text-field
          label="First name"
          v-model="local.firstName" />
        <v-text-field
          label="Last name"
          v-model="local.lastName" />
        <v-text-field
          label="Mobile phone"
          type="tel"
          v-model="local.cellPhone" />
        <v-text-field
          label="Email"
          type="email"
          v-model="local.email" />
        <v-text-field
          label="Title"
          v-model="local.title" />
        <v-text-field
          label="Organisation"
          v-model="local.organization" />
      </v-card-text>
      <v-card-actions>
        <v-btn type="submit" text>Save</v-btn>
      </v-card-actions>
    </v-card>
  </v-form>
</template>

<script>
import pick from 'lodash/pick'

import cardProps from '@/components/card-props'

export default {
  props: {
    ...cardProps
  },
  data () {
    const cardPropKeys = Object.keys(cardProps)
    const local = pick(this, cardPropKeys)
    return { local }
  }
}
</script>
