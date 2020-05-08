export interface MarginColumn extends HTMLElement {
  connectedToMarginCallback(line: number): void
}

export interface MarginColumnConstructor {
  new (): MarginColumn
  reservedWidth: number
}
