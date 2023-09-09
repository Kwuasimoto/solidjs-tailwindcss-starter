import { Component, JSX } from "solid-js";
import { cn } from "./util/merge-clsx";
import { styleState } from "@styles";
import { StyleStates } from "@types";

export const Header: Component<JSX.HTMLAttributes<any>> = (props) => {
  return (
    <div
      class={cn(
        "flex h-12 w-full items-end border-b border-b-gray-700",
        props.class,
      )}
      {...props}
    >
      <div class={cn("flex w-full")}>
        <span class={cn("ml-2")}>SolidJS</span>
        <span class={cn("mx-2 mb-1 w-[1px] bg-gray-700")} />
        <span class={cn("mr-2")}>Text Input Example</span>
      </div>
      <div class={cn("flex w-full justify-center text-xs font-bold")}>
        <button
          onclick={() => {
            styleState.state === StyleStates.Light
              ? styleState.set(StyleStates.Dark)
              : styleState.set(StyleStates.Light);
          }}
        >
          Style Mode
        </button>
      </div>
      <div class={cn("mr-2 w-full text-end")}>Kwuasimoto</div>
    </div>
  );
};
