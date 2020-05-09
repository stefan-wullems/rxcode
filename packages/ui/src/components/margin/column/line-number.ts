import {MarginColumn} from './interface'
import {html, render} from 'lit-html'

function createRowNumber(number: number) {
  const style = ` 
    display: inline-block;
    vertical-align: middle;
    text-align: right;
    box-sizing: border-box;
    cursor: default;
    left: 0;
    height: 100%;
    width: 40px;

    color: #858585;
  `
  return html`
    <div role="presentation" style="${style}">
      ${number}
    </div>
  `
}

export class RowNumber extends HTMLElement implements MarginColumn {
  public static readonly componentName = 'rxui-row-number'
  public static readonly reservedWidth = 42

  _row: number = 0

  public get row() {
    return this._row
  }

  public set row(val: number) {
    this._row = val
    this.render()
  }

  constructor() {
    super()

    this.attachShadow({mode: 'open'})
  }

  render() {
    render(createRowNumber(this._row), this.shadowRoot!)
  }
}

customElements.define(RowNumber.componentName, RowNumber)
