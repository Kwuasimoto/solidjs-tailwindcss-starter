import { Component, createEffect, createSignal, JSX } from "solid-js";
import { InputProps, StylePseudoClass } from "@types";
import { styles } from "@styles";
import { concat, without } from "lodash-es";

export const TextInput: Component<InputProps> = (props) => {
  const [pseudoClasses, setPseudoClasses] = createSignal<StylePseudoClass[]>(
    [],
  );
  const [ref, setRef] = createSignal<JSX.Element>();

  createEffect(() => {
    if (ref() && props.refCallback) {
      props.refCallback(ref);
    }
  });

  return (
    <input
      ref={setRef}
      class={styles.input(pseudoClasses)}
      name={props.path}
      id={props.path}
      onmouseenter={() => {
        setPseudoClasses((prev) => [...concat(prev, StylePseudoClass.Hover)]);
      }}
      onmouseleave={() => {
        setPseudoClasses((prev) => [...without(prev, StylePseudoClass.Hover)]);
      }}
      {...props}
    />
  );
};
