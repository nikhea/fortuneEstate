import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";
import { FormFilterData } from "../components/card/filterCard";

// Define your store
interface StoreState {
  pageNumber: number;
  limitProperties: number;
  sortProperties: number;
  formData: {};
  setPageNumber: (pageNumber: number) => void;
  setLimitProperties: (limitProperties: number) => void;
  setSortProperties: (sortProperties: number) => void;
  setFormData: any;
  submitFilterForm: (formData: FormFilterData) => void;
}
// setFormData: (formData: FormFilterData | null) => void;

const useSearchStore = create<StoreState>((set) => ({
  pageNumber: 1,
  limitProperties: 2,
  sortProperties: 1,
  formData: {},
  setPageNumber: (pageNumber) => set({ pageNumber }),
  setLimitProperties: (limitProperties) => set({ limitProperties }),
  setSortProperties: (sortProperties) => set({ sortProperties }),
  setFormData: (formData: FormFilterData) => set({ formData }),
  submitFilterForm: (formData) => {
    set({ formData });
  },
}));

export default useSearchStore;
// interface IFiilter {
//     Fiilter: {};
//     setFiliters: any;
//   }
//   export const FilitersStore = (set: any) => ({
//     filterProperties: {},
//     setFiliters: (filters: any) =>
//       set(() => ({
//         filterProperties: filters,
//       })),
//   });
