import axios from "axios";


class RandomuserApi {
  constructor() {
    this.baseUrl = 'https://randomuser.me/api/'

  }

  async showRandomuser() {
    // console.log("APIjs -- Function SHOW Randomuser run.");

    try {
      const { data } = await axios.get(this.baseUrl);
      // console.log("APIjs -- Randomuser = ", data);
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getRandomuser() {
    return Promise.resolve(this.randomuser);
  }
}

export const Randomuser = new RandomuserApi();