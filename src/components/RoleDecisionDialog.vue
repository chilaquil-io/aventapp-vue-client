<template>
  <div class="modal" v-bind:class="{'is-active': isActive}">
    <div class="modal-background"></div>
    <div class="modal-content">
      <div class="box">

        <!-- Main container -->

        <div class="columns is-mobile">
          <div class="column">
            <div class="card" v-on:click="goTo('/other')">

              <div class="card-content">
                <div class="media">
                  <div class="media-left">
                    <figure class="image is-48x48">
                      <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
                    </figure>
                  </div>
                  <div class="media-content">
                    <p class="title is-4">Aventador</p>
                    <p class="subtitle is-6">@johnsmith</p>
                  </div>
                </div>

                <div class="content">
                  Publica un aventon. <a>@bulmaio</a>.
                  <a href="#">#css</a> <a href="#">#responsive</a>
                </div>
              </div>
            </div>
          </div>
          <div class="column">
            <div class="card" v-on:click="goTo('/dashboard')">

              <div class="card-content">
                <div class="media">
                  <div class="media-left">
                    <figure class="image is-48x48">
                      <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
                    </figure>
                  </div>
                  <div class="media-content">
                    <p class="title is-4">Aventado</p>
                    <p class="subtitle is-6">@johnsmith</p>
                  </div>
                </div>

                <div class="content">
                  Busca un aventon. <a>@bulmaio</a>.
                  <a href="#">#css</a> <a href="#">#responsive</a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
    <button v-on:click="closeModal" class="modal-close is-large" aria-label="close"></button>
  </div>
</template>

<script>
export default {
  name: 'RoleDecisionDialog',
  data: () => ({
  }),
  methods: {
    closeModal() {
      //this.$el.classList.remove('is-active');
      this.$store.dispatch('toggleModal', false);
    },
    goTo(path) {
      this.$store.dispatch('toggleModal', false);
      this.$router.push(path);
    },
  },
  computed: {
    isActive() {
      return this.$store.state.isModalVisible;
    },
  },
};
</script>

<style scoped>

</style>
