<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>QR Card</span>
      </v-toolbar-title>
    </v-app-bar>

    <v-content>
      <div
        v-for="(card, index) in cards"
        :key="card.created">
        <EditCard
          v-if="card.isEditing"
          v-bind="card.data"
          @submit="updateCard(index, $event)" />
        <Card
          v-else
          v-bind="card.data"
          @clickEdit="card.isEditing = true" />
      </div>
    </v-content>
  </v-app>
</template>

<script>
import Card from '@/components/Card'
import EditCard from '@/components/EditCard'

export default {
  components: {
    Card,
    EditCard
  },
  data () {
    return {
      cards: [
        {
          isEditing: false,
          created: 1569776982921,
          data: {}
        }
      ]
    }
  },
  methods: {
    updateCard (index, data) {
      const card = this.cards[index]
      Object.assign(card.data, data)
      card.isEditing = false
    }
  }
}
</script>
