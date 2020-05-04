import {BaseComponent} from '../utils/component'

import './margin.css'

interface MarginProps {
  height: number
  backgroundColor: string
}

export class Margin extends BaseComponent<MarginProps> {
  public static readonly OUTER_CLASS_NAME = 'margin'

  private readonly _domNode: HTMLElement

  constructor() {
    super()
    this._domNode = document.createElement('div')

    this.registerPropHandlers({
      height: value => {
        this._domNode.style.height = value + 'px'
      },
      backgroundColor: value => {
        this._domNode.style.backgroundColor = value
      },
    })
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
