<template>
  <div>
    <b-container>
      <h6>TRENDING</h6>
      <h3>Trending destinations</h3>
      <div>
        <b-card
          overlay
          img-src="https://picsum.photos/900/250/?image=3"
          img-alt="Card Image"
          text-variant="white"
          title="Image Overlay"
          sub-title="Subtitle"
        >
          <b-card-text>
            Some quick example text to build on the card and make up the bulk of
            the card's content.
          </b-card-text>
        </b-card>
      </div>
      <br />
      <b-card
        overlay
        :img-src="require('../../../assets/img/bgTopDestination.png')"
        img-alt="Card Image"
        text-variant="white"
        title="Image Overlay"
        sub-title="Subtitle"
      >
        <b-card-text>
          Some quick example text to build on the card and make up the bulk of
          the card's content.
        </b-card-text>
        <div class="list-img">
          <img src="../../../assets/img/img1.png" alt="" />
        </div>
      </b-card>
    </b-container>
  </div>
</template>
<script>
export default {
  name: 'ContentLanding',
  component: {}
}
</script>
