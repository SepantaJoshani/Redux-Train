import { createStore } from "redux";

const counterReducer = (state = { counter: 0, show: true }, action) => {
  switch (action.type) {
    case "increment": {
      return {
        counter: state.counter + 1,
        show: state.show,
      };
    }

    case "decrement": {
      return {
        counter: state.counter - 1,
        show: state.show,
      };
    }

    case "increase": {
      return {
        counter: state.counter + action.payload,
        show: state.show,
      };
    }

    case "toggle": {
      return {
        counter: state.counter,
        show: !state.show,
      };
    }

    default:
      return state;
  }
};

const store = createStore(counterReducer);

export default store;
