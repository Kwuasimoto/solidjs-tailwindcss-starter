import { Component, Show } from "solid-js";
import { InputErrorProps } from "@types";

export const InputError: Component<InputErrorProps> = (props) => {
  return (
    <Show when={props.error}>
      <div class={`${props.class}`}>{props.error}</div>
    </Show>
  );
};
