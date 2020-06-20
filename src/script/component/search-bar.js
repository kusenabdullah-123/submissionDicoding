class SearchBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    this.render();
  }
  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }
  get value() {
    return this.shadowDOM.querySelector("#Search").value;
  }
  render() {
    this.shadowDOM.innerHTML = `<style>
    .search {
        margin: 30px auto;
        max-width: 800px;
        box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2);
        padding: 15px;
        border-radius: 9px;
        display: flex;
        background-color: white;
        position: sticky;
      }
      .search > input {
        width: 80%;
        border: 0;
        border-bottom: 1px solid cornflowerblue;
        font-weight: bold;
        padding: 15px;
        margin-right: 15px;
      }
      .search > input:focus {
        outline: 0;
        border-bottom: 3px solid cornflowerblue;
      }
      .search > input::placeholder {
        font-weight: normal;
      }
      .search > input:focus::placeholder {
        font-weight: bold;
      }
      .search button {
        width: 20%;
        cursor: pointer;
        margin-left: auto;
        padding: 16px;
        background-color: white;
        color: black;
        border: 2px solid cornflowerblue;
        text-transform: uppercase;
        transition: 0.5s;
      }
      
      .search button:hover {
        background-color: cornflowerblue;
        color: white;
      }
      
      @media screen and (max-width: 550px) {
        .search {
          flex-direction: column;
          position: static;
        }
      
        .search > input {
          width: 100%;
          margin-bottom: 12px;
        }
      
        .search > button {
          width: 100%;
        }
      }
    </style>
    <div class="search" id="search">
      <input type="search" id="Search" placeholder="Search movie" />
      <button type="submit" id="SearchButton">Search</button>
    </div>
    `;
    this.shadowDOM
      .querySelector("#SearchButton")
      .addEventListener("click", this._clickEvent);
  }
}
customElements.define("search-bar", SearchBar);
