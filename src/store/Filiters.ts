import { create } from "zustand";

import { devtools, persist } from "zustand/middleware";
interface IFiilter {
  Fiilter: {};
  setFiliters: any;
}
export const FilitersStore = (set: any) => ({
  filterProperties: {},
  setFiliters: (filters: any) =>
    set((state: any) => ({
      filterProperties: filters,
    })),
});

const useFilitersStore = create(
  devtools(
    persist(FilitersStore, {
      name: "filiters",
    })
  )
);

export default useFilitersStore;
