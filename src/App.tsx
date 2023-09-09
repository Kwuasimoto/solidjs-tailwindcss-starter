import type { Component, ComponentProps } from "solid-js";
import { onMount } from "solid-js";
import { Header } from "./Header";
import { TextInput } from "./TextInput";
import { InputError } from "./InputError";
import { styles, styleState } from "@styles";
import { StyleStates } from "@types";

const componentProjectName = "text-input";

const App: Component<ComponentProps<any>> = ({ isHovering }) => {
  const darkModeStorageKey = `@solidjs-${componentProjectName}-dark-mode`;

  onMount(() => {
    const html = document.querySelector("html");
    const darkMode = localStorage.getItem(darkModeStorageKey);
    if (darkMode === "dark-mode" && html instanceof HTMLElement) {
      styleState.set(StyleStates.Dark);
    } else {
      localStorage.setItem(darkModeStorageKey, "dark-mode");
      window.location.reload();
    }
  });

  return (
    <div class={styles.app()}>
      <Header />
      <div class={"flex flex-col"}>
        <TextInput path={"noice"} />
        <InputError />
      </div>
    </div>
  );
};

export default App;
