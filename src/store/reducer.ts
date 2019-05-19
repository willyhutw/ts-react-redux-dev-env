export interface stateType {
  counter: number;
}

const initialState: stateType = {
  counter: 0
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        counter: state.counter + 1
      };
    case "DECREMENT":
      return {
        counter: state.counter - 1
      };
    default:
      return state;
  }
};

export default reducer;
