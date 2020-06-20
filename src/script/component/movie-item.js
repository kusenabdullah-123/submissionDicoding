class MovieItem extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }
  set movie(movie) {
    this._movie = movie;
    this.render();
  }
  render() {
    this.shadowDOM.innerHTML = `
    <style>
    .card {
        display: block;
        margin-top: 25px;
        margin-right: 20px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        transition: 0.3s;
        width: 450px;
        height: 450px;
        border-radius: 10px;
      }
      .card > .image {
        padding-left : 100px;
        width: 250px;
        height: 250px;
      }
      .card:hover {
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
      }
      
      .card-body {
        padding: 2px 16px;
      }
      
    </style>
      <div class="card">
                          <img src="${this._movie.Poster}" alt="image" class="image" />
                         <div class="card-body">
                           <h3>Title : <b>${this._movie.Title}</b></h3>
                           <p>Type : ${this._movie.Type}</p>
                           <p>year : ${this._movie.Year}</p>
                          </div>
                       </div>
      `;
  }
}
customElements.define("movie-item", MovieItem);
