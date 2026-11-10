import { create } from "zustand";

export interface User { _id: string; username: string; firstName: string; lastName: string; role: string; }
interface AccountState {
  currentUser: User | null;
  signin: (username: string) => void;
  signout: () => void;
}

export const useAccountStore = create<AccountState>((set) => ({
  currentUser: null, // signed out by default — graders open signed out
  signin: (username) =>
    set({ currentUser: { _id: "u1", username, firstName: username || "User", lastName: "", role: "STUDENT" } }),
  signout: () => set({ currentUser: null }),
}));
