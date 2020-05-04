import {BaseComponent} from '../utils/component'

import './margin.css'

export class Margin {
  public static readonly OUTER_CLASS_NAME = 'margin'

  private readonly _domNode: HTMLElement

  constructor() {
    this._domNode = document.createElement('div')
  }

  public render() {
    this._domNode.classList.add(Margin.OUTER_CLASS_NAME)
    this._domNode.setAttribute('position', 'absolute')
    this._domNode.setAttribute('role', 'presentation')
    this._domNode.setAttribute('aria-hidden', 'true')
    ;(<any>this._domNode.style).contain = 'strict'

    return this._domNode
  }
}
