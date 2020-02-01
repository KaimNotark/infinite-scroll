<template>
  <div class="card-container">
    <div class="card-text">
      <p class="card-name">
        <span class="card-name__title">Name:</span>
        {{ dataCard.name }}
      </p>
      <p class="card-mail">
        <span class="card-name__title">E-mail:</span>
        {{ dataCard.mail }}
      </p>
    </div>

    <img :src="dataCard.imgUrl" alt="фотография" class="card-image" />
  </div>
</template>

<script>
export default {
  name: "Card",

  props: {
    dataCard: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss">
@import "../stylesheets/variables.scss";

.card {
  &-container {
    display: flex;
    justify-content: space-between;
    width: 500px;
    height: 175px;
    padding: 20px;
    border: 2px solid $color-yellow-light;
    border-radius: 5px;
    background-color: $color-yellow-pale;
  }

  &-text {
    padding-top: 23px;
  }

  &-name {
    &__title {
      color: $color-yellow-dark;
      font-weight: bold;
      letter-spacing: 2px;
    }
  }

  &-mail {
  }

  &-image {
  }
}
</style>
