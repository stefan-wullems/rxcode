import {html} from 'lit-html'

const marginRowTemplate = document.createElement('template')
marginRowTemplate.innerHTML = html`
  <style>
    :host {
      position: absolute;
      width: 100%;
    }
  </style>

  <div class="row">
    <slot name="column"></slot>
  </div>
`.getHTML()

export class MarginRow extends HTMLElement {
  public static readonly componentName = 'rxui-margin-row'

  constructor() {
    super()

    const shadowRoot = this.attachShadow({mode: 'open'})
    shadowRoot.appendChild(marginRowTemplate.content.cloneNode(true))
  }

  connectedCallback() {
    this.setAttribute('role', 'presentation')
  }
}

customElements.define(MarginRow.componentName, MarginRow)
