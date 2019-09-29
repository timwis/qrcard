<template>
  <v-card max-width="344" class="mx-auto">
    <v-card-text class="text-center">
      <!-- <canvas ref="canvas" /> -->
      <img
        :src="qrcode"
        class="qrcode">
      <div v-if="isDev">{{ vcard }}</div>
    </v-card-text>
    <v-card-actions>
      <v-btn text @click="$emit('clickEdit')">Edit</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import vCards from 'vcards-js'
import QRCode from 'qrcode'

import cardProps from '@/components/card-props'
const vcardKeys = Object.keys(cardProps)

export default {
  props: {
    ...cardProps
  },
  computed: {
    isDev: () => process.env.NODE_ENV === 'development',
    vcard () {
      const vcard = vCards()
      vcardKeys.forEach((key) => {
        vcard[key] = this[key]
      })
      return vcard.getFormattedString()
    }
  },
  asyncComputed: {
    qrcode () {
      return QRCode.toDataURL(this.vcard)
    }
  }
}
</script>

<style lang="sass">
.qrcode
  width: 100%
</style>
