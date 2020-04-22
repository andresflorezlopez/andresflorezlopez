import configureStore from "redux-mock-store";

export default class App {

  static boot() {
    return this;
  }

  static withState(
    state = {
      characters: {
        characters: {
          1: {
            id: 1,
            name: "Kaney West",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tellus urna, viverra a tempus eget, eleifend eget quam.",
            startDateInEntertaiment: "1 mont ago in Entertaiment",
            voting: {
              like: 1,
              dislike: 9
            }
          }
        }
      }
    },
    middlewares = []
  ) {
    const mockStore = configureStore(middlewares);
    this.store = {
      redux: mockStore(state)}
  }
}