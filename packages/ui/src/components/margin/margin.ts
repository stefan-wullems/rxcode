import {LitElement, css} from 'lit-element'
import {html} from 'lit-html'
import {styleMap} from 'lit-html/directives/style-map'
import {repeat} from 'lit-html/directives/repeat'

import {times} from '../../directives/times'

import {MarginColumnConstructor} from './column/interface'
import './column'

export class Margin extends LitElement {
  static get styles() {
    return css`
      #margin {
        position: absolute;
        background-color: #1e1e1e;
        color: #d4d4d4;
        top: 0px;
        contain: strict;
      }
      #rows {
        position: absolute;
        width: 100%;
        height: 100%;
        font-family: Arial;
        font-size: 14px;
        line-height: 19px;
        letter-spacing: 0px;
      }
      .row {
        position: absolute;
        width: 100%;
        padding-right: 2px;
        height: 19px;
      }
    `
  }

  public rows = 30
  public columns: MarginColumnConstructor[] = []

  private _rowHeight = 19

  render() {
    return html`
      <style>
        #margin {
          width: ${this.columns.reduce(
            (acc, col) => acc + col.reservedWidth,
            0,
          )}px;
        }
      </style>

      <style>
        #margin {
          height: ${this.rows * this._rowHeight}px;
        }
      </style>

      <div id="margin" role="presentation">
        <div id="rows">
          ${times(
            this.rows,
            i => html` <div class="row" style=${styleMap({top: i * 19 + 'px'})}>
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
