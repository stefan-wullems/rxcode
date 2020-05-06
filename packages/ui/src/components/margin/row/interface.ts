export abstract class AbstractMarginColumn extends HTMLElement {
  abstract connectedToMarginCallback(line: number): void
  static reservedWidth = 0
}
