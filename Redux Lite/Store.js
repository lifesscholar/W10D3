// import * as reducers from "./Reducer";

class Store {
  constructor(rootReducer) {
    debugger
    this.rootReducer = rootReducer;
    this.state = {theme: "light", boolean: false };
  }

  

  getState () {
    return Object.assign({}, this.state);
  }
}

window.store= new Store();