/* eslint-disable import/no-cycle */
import StoreLoader from "./boot-loaders/store-loader";

const loaders = [StoreLoader];

export default class App {
  static boot() {
    return Promise.all(loaders.map(s => s.boot(App)))
      .then(() => {
        console.info("loaders done!");
      })
      .catch(err => console.error("Error while booting the app", err));
  }
}