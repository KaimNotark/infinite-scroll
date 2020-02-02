<template>
  <div id="app">
    <div id="wrapper" class="wrapper">
      <header class="header">
        <div class="header-container">
          <img src="/images/infinity-scroll.png" alt class="header-img" />
          <a href="https://kaimnotark.github.io/LP_DEAB/" class="header-link" target="_blank">
            <span class="__capital">landing page</span>
            (open it on desktop)
          </a>
        </div>
      </header>

      <main class="main">
        <div class="main-window">
          <h2 class="main-window__title">window for test</h2>
          <hr class="main-window__devider" />
          <p class="main-window__text">Press button for load data from API</p>
          <Button @download="showRandomuser" />
          <Cards :user="dataCard" />
          <button class="main-window__btn" @click="addCard">Add new card</button>
          <p class="main-window__text">scrollPosition {{ scrollPosition }}</p>
          <p class="main-window__text">clientHeightValue {{ clientHeightValue }}</p>
          <p class="main-window__text">scrollHeightValue {{ scrollHeightValue }}</p>
        </div>
        <div class="main-window">
          <h2 class="main-window__title">window for infinity scroll</h2>
          <hr class="main-window__devider" />
          <div class="main-window__scroll" @scroll="onScroll">
            <Cards v-for="user in initUsers" :key="user.id" :user="user" />
          </div>
        </div>
      </main>

      <footer class="footer">
        <a href="https://kaimnotark.github.io/LP_DEAB/" class="footer-link" target="_blank">
          <span class="__capital">landing page</span>
          (open it on cell phone)
        </a>
      </footer>
    </div>
  </div>
</template>

<script>
// import simplebar from "simplebar-vue";
// import "simplebar/dist/simplebar.min.css";

import Button from "./components/Button.vue";
import Cards from "./components/Cards.vue";

import { Randomuser } from "./Api";

export default {
  name: "app",

  components: {
    // simplebar,
    Button,
    Cards
  },

  data() {
    return {
      scrollPosition: 0,
      clientHeightValue: 0,
      scrollHeightValue: 0,

      wholeRandomuser: [],
      initUsers: [],
      manyRandomusers: [
        {
          name: "aaaaaaaaaaaaa",
          mail: "dasldkfjalsjf@lkjdf.ru",
          imgUrl: "https://randomuser.me/api/portraits/men/6.jpg"
        },
        {
          name: "bbbbbbbbbbbbbbb",
          mail: "dasldkfjalsjf@lkjdf.ru",
          imgUrl: "https://randomuser.me/api/portraits/women/36.jpg"
        },
        {
          name: "ccccccccccccccccc",
          mail: "dasldkfjalsjf@lkjdf.ru",
          imgUrl: "https://randomuser.me/api/portraits/women/87.jpg"
        },
        {
          name: "ddddddddddddddddddd",
          mail: "dasldkfjalsjf@lkjdf.ru",
          imgUrl: "https://randomuser.me/api/portraits/men/16.jpg"
        },
        {
          name: "eeeeeeeeeeeeeeeee",
          mail: "dasldkfjalsjf@lkjdf.ru",
          imgUrl: "https://randomuser.me/api/portraits/men/3.jpg"
        }
      ],

      dataCard: {
        name: "",
        mail: "",
        imgUrl: ""
      }
    };
  },

  methods: {
    async showRandomuser() {
      // console.log("APP -- method showRandomuser run.");
      await this.getRandomuser();
      this.parsing();
    },

    async getRandomuser() {
      // console.log("APP -- method getRandomuser run.");
      try {
        this.wholeRandomuser = await Randomuser.showRandomuser();
      } catch (error) {
        console.error(error);
      }
    },

    parsing() {
      // console.log("APP -- method parsing run.");
      this.dataCard.name =
        this.wholeRandomuser.results[0].name.title +
        ". " +
        this.wholeRandomuser.results[0].name.first +
        " " +
        this.wholeRandomuser.results[0].name.last;
      // console.log("APP -- name = " + this.dataCard.name);

      this.dataCard.mail = this.wholeRandomuser.results[0].email;
      this.dataCard.imgUrl = this.wholeRandomuser.results[0].picture.large;
    },

    async initRandomusers(initUsers) {
      for (let i = 0; i < 5; i++) {
        // console.log("APP -- initRandomusers.");
        await this.getRandomuser();
        this.parsing();
        // console.log("APP -- initRandomusers - name = " + this.dataCard.name);
        initUsers.push({
          name: this.dataCard.name,
          mail: this.dataCard.mail,
          imgUrl: this.dataCard.imgUrl
        });
        // console.log("APP -- initRandomusers - initUsers = ") + this.initUsers;
      }
    },

    async addCard() {
      await this.getRandomuser();
      this.parsing();
      this.initUsers.push({
        name: this.dataCard.name,
        mail: this.dataCard.mail,
        imgUrl: this.dataCard.imgUrl
      });
    },

    onScroll() {
      var container = event.target;
      this.scrollPosition = container.scrollTop;
      this.clientHeightValue = container.clientHeight;
      this.scrollHeightValue = container.scrollHeight;

      // console.log("APP -- method onScroll run." + this.scrollPosition);
    }

    // scroll() {
    //   window.onscroll = () => {
    //     let bottomOfWindow =
    //       document.documentElement.scrollTop + window.innerHeight ===
    //       document.documentElement.offsetHeight;
    //     console.log("bottomOfWindow = " + bottomOfWindow);
    //   };
    // }
  },

  created() {
    // beforeMount() {
    // console.log("APP -- created initRandomusers.");
    this.initRandomusers(this.initUsers);
  },

  mounted() {
    // this.scroll();
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
    margin: 10px;
    width: 575px;
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

    &__btn {
      width: 100px;
      height: 40px;
      margin: 30px;
      border: solid 2px $color-yellow-light;
      background: $color-yellow-pale;
      border-radius: 3px;
      color: $color-black;
      font-family: Roboto;
      font-size: 11px;
      font-weight: 700;
      line-height: 13px;
      text-transform: uppercase;
      transition: background-color 0.1s ease, border-color 0.3s ease;
      cursor: pointer;
    }
    &__btn:hover {
      border-color: $color-yellow-dark;
      background-color: $color-yellow-main;
      font-weight: bold;
      letter-spacing: 2px;
    }
    &__btn:focus {
      outline: none;
      border: 2px solid $color-yellow-dark;
    }
    &__btn:active {
      border: 2px solid $color-yellow-light;
      background-color: $color-yellow-dark;
      color: $color-gray;
    }

    &__scroll {
      height: calc(100vh - (115px + 130px));
      overflow: auto;
      overflow-x: hidden;
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

.simplebar-track.simplebar-vertical .simplebar-scrollbar:before {
  background-color: $color-yellow-light;
}

// .simplebar-scrollbar:hover {
//     background-color: red;
// }
</style>
