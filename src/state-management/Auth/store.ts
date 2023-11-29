import { create } from "zustand";

interface AuthStore {
  user: string;
  Login: (username: string) => void;
  Logout: () => void;
}

const UseAuthStore = create<AuthStore>((set) => ({
  user: "",
  Login: (username) =>
    set(() => ({
      user: username,
    })),
  Logout: () =>
    set(() => ({
      user: "",
    })),
}));
export default UseAuthStore;
