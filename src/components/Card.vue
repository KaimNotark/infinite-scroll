<template>
  <div class="card-container">
    <div class="card-text">
      <p class="card-name">
        <span class="card-name__title">Name:</span>
        {{ user.name }}
      </p>
      <p class="card-mail">
        <span class="card-name__title">E-mail:</span>
        {{ user.mail }}
      </p>
    </div>

    <img :src="user.imgUrl" alt="avatar" class="card-image" />
  </div>
</template>

<script>
export default {
  name: "Card",

  props: {
    user: {
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
    margin-top: 10px;
    margin-left: 20px;
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
}
</style>
