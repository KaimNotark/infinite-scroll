<template>
  <div id="app">
    <div id="wrapper" class="wrapper">
      <header class="header">
        <div class="header-container">
          <img src="/images/infinity-scroll.png" alt class="header-img" />
        </div>
      </header>
    </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: "app",

  components: {
    // HelloWorld
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Roboto&display=swap");

@import "./stylesheets/variables.scss";
@import "./stylesheets/resets.scss";

$font-family-primary: "Roboto", "Verdana", "Arial", sans-serif;

html {
  scroll-behavior: smooth;
  overflow: hidden;
}

.wrapper *,
.wrapper *::before,
.wrapper *::after {
  box-sizing: border-box;
}

body {
  font-family: $font-family-primary;
  box-sizing: border-box;
}

.wrapper {
}

#app {
  font-family: $font-family-primary;
}

.header {
  width: 100%;
  position: relative;

  &-container {
    padding: 15px 27px;
    background-color: $color-gray;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.3);
  }

  &-img {
    user-select: none;
  }
}
</style>
