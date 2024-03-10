import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";

// interface QueryStringState {
//   queryString: string;
//   setQueryString: (queryString: string) => void;
// }

// const queryStringStore = create((set) => ({
//   queryString: "",
//   setQueryString: (queryString: string) => set({ queryString }),
// }));

export const queryStringStore = (set: any) => ({
  queryString: "",
  setQueryString: (queryString: string) =>
    set(() => ({
      queryString,
    })),
});

const useQueryStringStore = create(
  devtools(
    persist(queryStringStore, {
      name: "queryStore",
      //   storage: createJSONStorage(() => sessionStorage),
    })
  )
);

export default useQueryStringStore;
