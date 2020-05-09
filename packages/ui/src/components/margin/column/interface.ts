export interface MarginColumn extends HTMLElement {
  row?: number
}

export interface MarginColumnConstructor {
  new (): MarginColumn
  reservedWidth: number
}
