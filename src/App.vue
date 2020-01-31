<template>
  <div id="app">
    <div id="wrapper" class="wrapper">
      <header class="header">
        <div class="header-container">
          <img src="/images/infinity-scroll.png" alt class="header-img" />
          <a href="https://kaimnotark.github.io/LP_DEAB/" class="header-link" target="_blank">
            <span class="__capital">landing page</span>
            (presentation)
          </a>
        </div>
      </header>

      <main class="main">
        <div class="main-window">
          <h2 class="main-window__title">window for test</h2>
          <hr class="main-window__devider" />
          <p class="main-window__text">Press button for load data from API</p>
          <Button @download="showRandomuser" />
          <Card :data-card="dataCard" />
        </div>
        <div class="main-window">
          <h2 class="main-window__title">window for infinity scroll</h2>
          <hr class="main-window__devider" />
        </div>
      </main>

      <footer class="footer">
        <a href="https://kaimnotark.github.io/LP_DEAB/" class="footer-link" target="_blank">
          <span class="__capital">landing page</span>
        </a>
      </footer>
    </div>
  </div>
</template>

<script>
import Button from "./components/Button.vue";
import Card from "./components/Card.vue";

import { Randomuser } from "./Api";

export default {
  name: "app",

  components: {
    Button,
    Card
  },

  data() {
    return {
      wholeRandomuser: [],

      dataCard: {
        name: "",
        mail: "",
        imgUrl: ""
      }
    };
  },

  // created() {
  // this.showApplicants();
  // },

  methods: {
    async showRandomuser() {
      console.log("APP -- method showRandomuser run.");
      try {
        this.wholeRandomuser = await Randomuser.showRandomuser();
        console.log("APP -- wholeRandomuser = " + this.wholeRandomuser);
        this.parsing();
      } catch (error) {
        console.error(error);
      }
    },

    parsing() {
      console.log("APP -- method parsing run.");
      this.dataCard.name =
        this.wholeRandomuser.results[0].name.title +
        ". " +
        this.wholeRandomuser.results[0].name.first +
        " " +
        this.wholeRandomuser.results[0].name.last;
      console.log("APP -- name = " + this.dataCard.name);

      this.dataCard.mail = this.wholeRandomuser.results[0].email;
      this.dataCard.imgUrl = this.wholeRandomuser.results[0].picture.large;
    }
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
    display: flex;
    justify-content: space-between;
    padding: 15px 27px;
    background-color: $color-gray;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.3);
  }

  &-img {
    user-select: none;
  }

  &-link {
    color: $color-white;
    font-size: 14px;
    height: 12px;
    margin-top: 12px;
    letter-spacing: 1px;
    text-decoration: none;
    position: relative;
  }

  &-link:hover::before {
    content: "";
    position: absolute;
    right: 0;
    bottom: -10px;
    width: 46%;
    height: 2px;
    background-color: $color-yellow-light;
  }

  &-link:hover::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -10px;
    width: 46%;
    height: 2px;
    background-color: $color-yellow-light;
  }

  &-link:hover {
    text-decoration: none;
    color: $color-yellow-main;
  }
}

.main {
  display: flex;
  justify-content: center;
  margin: 20px;
  height: calc(100vh - (115px + 50px));
  min-height: 370px;

  &-window {
    padding: 10px;
    margin: 5px;
    width: 525px;
    height: 100%;
    min-height: 350px;
    border: 2px solid $color-yellow-main;
    border-radius: 10px;

    &__title {
      color: $color-yellow-light;
      text-transform: uppercase;
    }

    &__devider {
      border: 0;
      height: 2px;
      background: $color-yellow-main;
    }
  }
}

.footer {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 48px;
  background-color: $color-gray;
  box-shadow: 0px -5px 10px rgba(0, 0, 0, 0.3);

  &-link {
    color: $color-white;
    font-size: 14px;
    height: 12px;
    margin-top: 15px;
    letter-spacing: 1px;
    text-decoration: none;
    position: relative;
  }

  &-link:hover::before {
    content: "";
    position: absolute;
    right: 0;
    bottom: -10px;
    width: 46%;
    height: 2px;
    background-color: $color-yellow-light;
  }

  &-link:hover::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -10px;
    width: 46%;
    height: 2px;
    background-color: $color-yellow-light;
  }

  &-link:hover {
    text-decoration: none;
    color: $color-yellow-main;
  }
}

.__capital {
  text-transform: uppercase;
}
</style>
