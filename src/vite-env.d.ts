/// <reference types="vite/client" />

declare const container: HTMLDivElement

interface HTMLElement {
  style: string
}

type Tags = keyof HTMLElementTagNameMap;

type ElmByTag<K extends Tags> = HTMLElementTagNameMap[K];

type ElmFn<K extends Tags> = (props: object) => ElmByTag<K>;

type Ctor<T> = new (...args: any[]) => T

type Tags = keyof HTMLElementTagNameMap

type ElmByTag<K extends Tags> = HTMLElementTagNameMap[K]

declare namespace JSX {
  type IntrinsicElements = {
    [K in Tags]: Partial<ElmByTag<K>>
  }
}
