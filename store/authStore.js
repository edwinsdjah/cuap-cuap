import { create } from 'zustand';

export const useAuthStore = create(set => ({
  isLoggedIn: false,
  user: null,
  loading: true,
  setAuth: user =>
    set({
      isLoggedIn: !!user,
      user,
      loading: false,
    }),
  logOut: () =>
    set({
      isLoggedIn: false,
      user: null,
      loading: false,
    }),
}));
