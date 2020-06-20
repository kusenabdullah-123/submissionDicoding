import "./movie-item";
class MovieList extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }
  set movies(movies) {
    this._movies = movies;
    this.render();
  }
  ErrorRender(error) {
    this.shadowDOM.innerHTML = `<center><h2>${error}</h2></center>`;
  }
  render() {
    this.shadowDOM.innerHTML = `<style>
    .content {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-evenly;
        width: 100%;
      }
    </style>
    <div class="content"></div>
      `;
    this._movies.forEach((movie) => {
      const movieElement = document.createElement("movie-item");
      movieElement.movie = movie;
      this.shadowDOM.querySelector(".content").appendChild(movieElement);
    });
  }
}
customElements.define("movie-list", MovieList);
