import {LitElement, css} from 'lit-element'
import {html} from 'lit-html'

import {repeat} from 'lit-html/directives/repeat'

import {times} from '../../directives/times'

import {MarginColumnConstructor} from './column/interface'
import './column'

const ROW_HEIGHT = 20

export class Margin extends LitElement {
  static get styles() {
    return css`
      #margin {
        background-color: #1e1e1e;
        color: #d4d4d4;
        contain: strict;
      }
      #rows {
        font-family: Arial;
        font-size: 14px;
        letter-spacing: 0px;
      }
      .row {
        padding-right: 2px;
        height: ${ROW_HEIGHT}px;
      }
    `
  }

  public rows = 30
  public columns: MarginColumnConstructor[] = []

  render() {
    return html`
      <style>
        /* TODO see if parent can grow to child widths for arbitrary amount of children */
        #margin {
          width: ${this.columns.reduce(
            (acc, col) => acc + col.reservedWidth,
            0,
          )}px;
        }
      </style>

      <style>
        #margin {
          height: ${this.rows * ROW_HEIGHT}px;
        }
      </style>

      <div id="margin" role="presentation">
        <div id="rows">
          ${times(
            this.rows,
            i =>
              html` <div class="row">
                ${repeat(this.columns, column => {
                  const columnElement = new column()

                  columnElement.row = i + 1

                  return columnElement
                })}
              </div>`,
          )}
        </div>
      </div>
    `
  }
}

customElements.define('rx-margin', Margin)
