import {render, html} from 'lit-html'

import {MarginColumnConstructor} from './column/interface'
import './column'

function createMargin(rows: any[], opts: any) {
  return html`
    <style>
      #margin {
        position: absolute;
        background-color: #1e1e1e;
        color: #d4d4d4;
        width: ${opts.width}px;
        height: ${opts.height}px;
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
    </style>

    <div id="margin" role="presentation">
      <div id="rows">
        ${rows}
      </div>
    </div>
  `
}

function createRow(columns: any[], opts: any) {
  const style = `
    position:absolute;
    top:${(opts.row - 1) * opts.height}px;
    width:100%;
    height:${opts.height}px;
    padding-right: 2px;
  `
  return html`
    <div style="${style}">
      ${columns}
    </div>
  `
}

export class Margin extends HTMLElement {
  public rows = 30
  public columns: MarginColumnConstructor[] = []

  private _rowHeight = 19

  get _marginElement() {
    return this.shadowRoot?.querySelector('#margin') as HTMLDivElement
  }

  constructor() {
    super()

    this.attachShadow({mode: 'open'})
  }

  connectedCallback() {
    this._initialRender()
  }

  _initialRender() {
    this._renderOverlays()
  }

  _renderOverlays() {
    let rows = []
    for (let rowNumber = 1; rowNumber <= this.rows; rowNumber++) {
      const columnElements = this.columns.map(column => {
        const columnElement = new column()

        columnElement.row = rowNumber

        return columnElement
      })

      const rowElement = createRow(columnElements, {
        height: this._rowHeight,
        row: rowNumber,
      })

      rows.push(rowElement)
    }

    render(
      createMargin(rows, {
        width: this.columns.reduce((acc, col) => acc + col.reservedWidth, 0),
        height: this.rows * this._rowHeight,
      }),
      this.shadowRoot!,
    )
  }

  render() {}
}

customElements.define('rx-margin', Margin)
