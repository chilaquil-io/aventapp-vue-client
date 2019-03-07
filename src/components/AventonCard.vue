<template>
  <div class="column is-one-third">
    <div class="card large round">
      <div class="card-image ">
        <figure class="image">
          <img src="https://source.unsplash.com/Jy6luiLBsrk" alt="Image">
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-left">
            <figure class="image is-96x96">
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample5.jpg" alt="Image">
            </figure>
          </div>
          <div class="media-content">
            <p class="title is-4 no-padding">Atsui</p>
            <p><span class="title is-6"><a href="http://twitter.com/#">@twitterid</a></span></p>
            <p class="subtitle is-6">Moderator</p>
          </div>
        </div>
        <div class="content">
          {{ aventon.message }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'AventonCard',
    props: ['aventon'],
  };
</script>

<style scoped>

</style>
