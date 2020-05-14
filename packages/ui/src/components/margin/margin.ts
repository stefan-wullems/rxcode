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
      #margin {
        background-color: #1e1e1e;
        color: #d4d4d4;
        contain: strict;
        font-family: Arial;
        font-size: 14px;
        letter-spacing: 0px;

        display: table;
      }

      .row {
        height: ${ROW_HEIGHT}px;
      }
    `
  }

  @property({attribute: false})
  rowTemplate: HTMLTemplateElement = document.createElement('template')

  @property({type: Number}) rows = 0

  renderRow(rowNumber: number) {
    const columns = this.rowTemplate
      ? (this.rowTemplate.content.cloneNode(true).childNodes as NodeListOf<
          MarginColumn
        >)
      : null

    if (columns) {
      return html`
        <div class="row">
          ${repeat(columns, column => applyProps(column, {row: rowNumber}))}
        </div>
      `
    }

    return html``
  }

  render() {
    return html`
      <div id="margin" role="presentation">
        ${times(this.rows, i => this.renderRow(i + 1))}
      </div>
    `
  }
}

customElements.define(Margin.componentName, Margin)
