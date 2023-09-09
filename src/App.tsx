import type { Component } from "solid-js";
import { onMount } from "solid-js";
import { Header } from "./Header";
import { styles, styleState } from "@styles";
import { StyleStates } from "@types";

const componentProjectName = "text-input";

const App: Component = () => {
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
    </div>
  );
};

export default App;
