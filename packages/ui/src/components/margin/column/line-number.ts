import {MarginColumn} from './interface'
import {html, LitElement, property, css} from 'lit-element'

export class LineNumber extends LitElement implements MarginColumn {
  public static readonly componentName = 'rxui-line-number'

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

customElements.define(LineNumber.componentName, LineNumber)
