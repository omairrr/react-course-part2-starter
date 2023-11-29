import { create } from "zustand";
import Counter from "./Counter";

interface CounterStore {
  counter: number;
  max: number;
  increment: () => void;
  reset: () => void;
}

const UseCounterStore = create<CounterStore>((set) => ({
  counter: 0,
  max: 5,
  increment: () =>
    set((store) => ({
      counter: store.counter + 1,
    })),
  reset: () =>
    set((store) => ({
      counter: 0,
    })),
}));
export default UseCounterStore;
