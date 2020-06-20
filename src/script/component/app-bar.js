class AppBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    this.render();
  }
  render() {
    this.shadowDOM.innerHTML = `
    <style>
           * {
               margin: 0;
               padding: 0;
               box-sizing: border-box;
           }
           :host {
            background-color: rgb(129, 174, 238);
            display: block;
            width: 100%;
           }
           h2 {
            padding: 18px;
            color: white;
           }
       </style>
    <h2>Club Finder</h2>`;
  }
}
customElements.define("app-bar", AppBar);
