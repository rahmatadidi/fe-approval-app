import type { User } from "@/types/user";
import { create } from "zustand";

type State = {
  user?: User;
  setUser: (u?: User) => void;
  logout: () => void;
};

export const useAuth = create<State>((set) => ({
  user: undefined,
  setUser: (u) => set({ user: u }),

  logout: () => {
    localStorage.removeItem("token");
    set({ user: undefined });
  },
}));
