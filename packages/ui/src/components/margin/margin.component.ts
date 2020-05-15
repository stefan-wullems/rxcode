import {LitElement, css, property} from 'lit-element'
import {html} from 'lit-html'

import {repeat} from 'lit-html/directives/repeat'

import {times} from '../../utils/directives/times'
import {applyProps} from '../../utils/elements/applyProps'

import './column'
import {MarginColumn} from './column'

const ROW_HEIGHT = 20

export class Margin extends LitElement {
  static readonly componentName = 'rxui-margin'
  static get styles() {
    return css`
      :host {
        background-color: #1e1e1e;
        color: #d4d4d4;
        font-family: Arial;
        font-size: 14px;

        /* This makes the margin shrink to the size of all of its columns */
        display: table;
      }

      .row {
        height: ${ROW_HEIGHT}px;
      }
    `
  }

  @property({attribute: false}) rowTemplate?: HTMLTemplateElement

  @property({type: Number}) rows = 0

  renderRow(rowNumber: number) {
    if (this.rowTemplate) {
      const columns = this.rowTemplate.content.cloneNode(true)
        .childNodes as NodeListOf<MarginColumn>

      return html`
        <div class="row">
          ${repeat(columns, column => applyProps(column, {row: rowNumber}))}
        </div>
      `
    }
  }

  render() {
    return html` ${times(this.rows, i => this.renderRow(i + 1))} `
  }
}

customElements.define(Margin.componentName, Margin)
