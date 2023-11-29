interface Action {
  type: "INCREMENT" | "RESET";
}
const CounterReducer = (state: number, action: Action): number => {
  if (action.type == "INCREMENT") return state + 1;
  if (action.type == "RESET") return 0;
  else return state;
};

export default CounterReducer;
