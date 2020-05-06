import {AbstractMarginColumn} from './interface'
import {html} from 'lit-html'

const rowNumber = document.createElement('template')
rowNumber.innerHTML = html`
  <style>
    #row-number {
      text-align: right;
      width: 20px;
      height: 20px;
      display: block;
    }
  </style>

  <div id="row-number"></div>
`.getHTML()

export class RowNumber extends AbstractMarginColumn {
  public static readonly componentName = 'rxui-row-number'
  public static readonly reservedWidth = 20

  constructor() {
    super()

    const shadow = this.attachShadow({mode: 'open'})
    shadow.appendChild(rowNumber.content.cloneNode(true))
  }

  connectedCallback() {
    this.setAttribute('role', 'presentation')
  }

  connectedToMarginCallback(row: number) {
    this.shadowRoot?.querySelector('#row-number')!.innerHTML = String(row)
  }
}

customElements.define(RowNumber.componentName, RowNumber)
