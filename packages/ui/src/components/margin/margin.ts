import {LitElement, css, property} from 'lit-element'
import {html} from 'lit-html'

import {repeat} from 'lit-html/directives/repeat'

import {times} from '../../directives/times'

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

  public rowTemplate: HTMLTemplateElement = document.createElement('template')

  @property({type: Number}) rows = 30

  renderRow(rowNumber: number) {
    const columns = this.rowTemplate
      ? (this.rowTemplate.content.cloneNode(true).childNodes as NodeListOf<
          MarginColumn
        >)
      : null

    if (columns) {
      return html`
        <div class="row">
          ${repeat(columns, column => {
            column.row = rowNumber
            console.log(column)

            return column
          })}
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
