import { createStore } from "solid-js/store";
import { cn } from "./merge-clsx";
import { StyleState, StyleStates, StyleStore } from "@types";

const [styleState, setStyleState] = createStore<StyleState>({
  state: StyleStates.Dark,
  set: (state) => {
    const body = document.body;
    if (body instanceof HTMLBodyElement) {
      if (state === StyleStates.Dark) {
        body.classList.add("dark");
        setStyleState((prev) => ({ ...prev, state: StyleStates.Dark }));
      } else {
        body.classList.remove("dark");
        setStyleState((prev) => ({ ...prev, state: StyleStates.Light }));
      }
    }
  },
});

const [styles, setStyles] = createStore<StyleStore>({
  app: () =>
    cn(
      "fira flex h-full flex-col bg-gray-300",
      "dark:bg-gray-900 dark:text-gray-300",
    ),
});

export { styles, styleState, setStyles };
