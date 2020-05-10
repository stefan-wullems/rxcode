import {MarginColumn} from './interface'
import {html, LitElement, property, css} from 'lit-element'

export class RowNumber extends LitElement implements MarginColumn {
  public static readonly componentName = 'rxui-row-number'
  public static readonly reservedWidth = 42

  static get styles() {
    return css`
      :host {
        display: inline-block;
        vertical-align: middle;
        text-align: right;
        box-sizing: border-box;
        cursor: default;
        left: 0;
        height: 100%;
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
