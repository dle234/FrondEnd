import { atom, selector } from "recoil";

export interface OptionTypes {
  name: string;
  image: string | null;
}

export const titleState = atom<string>({
  key: "titleState",
  default: "",
});

export const contentState = atom<string>({
  key: "contentState",
  default: "",
});

export const categoryState = atom({
  key: "categoryState",
  default: "total",
});

export const timeLimitState = atom({
  key: "timeLimitState",
  default: 1440,
});

export const optionState = atom<OptionTypes[]>({
  key: "optionState",
  default: [
    { name: "", image: null },
    { name: "", image: null },
  ],
});

export const uploadSelector = selector({
  key: "uploadSelector",
  get: ({ get }) => {
    return {
      title: get(titleState),
      content: get(contentState),
      category: get(categoryState),
      timeLimit: get(timeLimitState),
      options: get(optionState),
    };
  },
  set: ({ set }, value) => {
    return (
      set(titleState, value),
      set(contentState, value),
      set(titleState, value),
      set(categoryState, value),
      set(timeLimitState, value),
      set(optionState, value)
    );
  },
});