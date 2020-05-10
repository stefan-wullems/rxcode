import {MarginColumn} from './interface'
import {html, LitElement, property, css} from 'lit-element'

export class RowNumber extends LitElement implements MarginColumn {
  public static readonly componentName = 'rxui-row-number'
  public static readonly reservedWidth = 42

  static get styles() {
    return css`
      :host {
        display: inline-block;
        text-align: right;
        cursor: default;
        width: 40px;
        color: #858585;
      }
    `
  }

  @property({type: Number}) row = -1

  render() {
    return html`
      <div role="presentation">
        ${this.row}
      </div>
    `
  }
}

customElements.define(RowNumber.componentName, RowNumber)
