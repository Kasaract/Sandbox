import { LitElement, html, property } from "lit-element";

import { styles } from "./styles";

class TicTacToe extends LitElement {

  static get styles() {
    return styles;
  }

  // Doesn't work but don't know why?
  // static styles = css``;

  static get properties() {
    return  {
      myProp: { type: String},
      myClass: { type: String }
    };
  }

  // and in typescript
  // @property({ type: String })
  // myProp = "";

  constructor() {
    super(); // super calls constructor of class you're extending
    this.myProp = "Hey!";
    this.myClass = "red";
  }

  // myProp;
  // also works, but when changed, does not rerender!!!

  render() {
    return html`
      <!-- 
      Can style like this
      <style>
        h1 {
          color: lightblue;
        }
      </style> -->
      <h1>Hello World!</h1>
      <slot></slot>
      <h1>Below</h1>

      <h1 class=${this.myClass}>${this.myProp}</h1>
      <div>
        <button @click=${() => {
          this.myProp = "one";
        }}>Click me for 1!</button>

        <button @click=${() => {
          this.myProp = "two";
        }}>Click me for 2!</button>
      </div>

      <div>
        <button @click=${() => {
          this.myClass="red";
        }}>Red</button>
        <button @click=${() => {
          this.myClass="blue";
        }}>Blue</button>
      </div>
    `;
  }

}

// <tic-tac-toe />
customElements.define("tic-tac-toe", TicTacToe);
//in typescript, @customeElements.define("tic-tac-toe");