<template>
  <div class="dashboard">
    <app-navbar></app-navbar>
    <div class="container">
      <section class="section">
        <searcher></searcher>
        <div class="row columns is-multiline">
          <aventon-card v-for="(item, index) in items" v-bind:key="item.id" v-bind:aventon="item"></aventon-card>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Searcher from '@/components/Searcher.vue';
import AventonCard from '@/components/AventonCard.vue';
import AppNavbar from '@/layout/AppNavbar.vue';

export default {
  name: 'ItineraryDashboard',
  data() {
    return {
      parentMessage: 'Parent',
      items: [
        { message: 'Foo' },
        { message: 'Bar' }
      ]
    }
  },
  components: {
    'app-navbar': AppNavbar,
    'aventon-card': AventonCard,
    Searcher,
  },
};
</script>

<style scoped>

</style>
