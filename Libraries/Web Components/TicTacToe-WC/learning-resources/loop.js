import { LitElement, html, property } from "lit-element";

class Loop extends LitElement {

  static get styles() {
    // return styles;
  }

  static get properties() {
    return  {
      list: { type: Array}
    };
  }

  constructor() {
    super();
    this.list = [];
  }

  render() {
    return html`
      <h1>My List</h1>
      <ul>
        ${this.list.map((item) => {
          return html`
            <li>${item}</li>
          `;
        })}
      </ul>
    `;
  }

}

customElements.define("loop-list", Loop);