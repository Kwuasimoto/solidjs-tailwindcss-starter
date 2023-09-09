import { Accessor, JSX } from "solid-js";

export interface JSXAttributes<T = HTMLDivElement>
  extends JSX.InputHTMLAttributes<T> {
  refCallback?: (ref: Accessor<JSX.Element>) => void;
}

export enum StylePseudoClass {
  Hover = "hover",
  Active = "active",
  Focus = "focus",
}

export enum StyleStates {
  Dark = "dark",
  Light = "light",
}

export interface StyleState {
  state: StyleStates;
  set: (state: StyleStates) => void;
}

export interface StyleStore {
  app: (pseudoClasses?: Accessor<StylePseudoClass[]>) => string;
}

export type InputProps = JSXAttributes<HTMLInputElement> & {
  path: string;
};

export type InputErrorProps = JSXAttributes<HTMLInputElement> & {
  error?: string;
  class?: JSX.InputHTMLAttributes<HTMLInputElement>["class"];
};
