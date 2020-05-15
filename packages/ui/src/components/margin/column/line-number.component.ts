import {MarginColumn} from './interface'
import {LitElement, property, css} from 'lit-element'

export class LineNumber extends LitElement implements MarginColumn {
  static readonly componentName = 'rxui-line-number'

  static get styles() {
    return css`
      :host {
        display: inline-block;
        text-align: right;
        width: 40px;
        color: #858585;

        /* This is here so that the user cannot select the line number */
        user-select: none;
        cursor: default;
      }
    `
  }

  @property({type: Number}) row?: number

  render() {
    return this.row
  }
}

customElements.define(LineNumber.componentName, LineNumber)
